const npm = require('./npm-commands');
const lerna = require('./lerna-commands');
const git = require('./git-commands');

const GITHUB_TOKEN = process.argv[2];
const FTP_PWD = process.argv[3];

(async () => {

  try {

    // Install Lerna
    await npm.install('lerna@3.16.4', '-global', 'GLOBALLY INSTALLING LERNA');

    await npm.install('rimraf', '-global', 'GLOBALLY INSTALLING RIMRAF');

    await npm.clean();

    // We are not interested in changes for the following directories.
    const ignoreChanges = " ' **/__documentation__/**' '**/__tests__/**' '**/.storybook/**'";

    // Check workspace for changed packages.
    const scopedPackages = await lerna.changed(ignoreChanges, 'CHECKING PACKAGES FOR CHANGES');

    // Verify we have changes.
    if (!scopedPackages) {
      console.log('No package changes were found. Exiting build process.\n');
      return;
    }

    // Install Package Dependencies.
    await npm.ci();

    // Import required libraries for the remainder of the build process.
    // Note - These steps must come after install because they use a dependency.
    const node = require('./node-commands');

    await git.status('', 'CHECKING PENDING CHANGES');

    await git.commitAllConditional('build: semaphore - updated lock file [skip ci]', 'THIS SHOULD NOT BE HAPPENING...');

    // Update the version for each package and create release tags.
    // Note - This step will update the package.json of each package and perform a local commit.
    await lerna.version();

    // Clean the micro-app bundle drop folder.
    // All files need to be cleaned up before we build changed packages as all micro-apps built will be placed
    // in the local marketplace drop folder. When publish is called, all built micro-apps in the folder will be published.
    await node.cleanDir('applications/app-local-marketplace/public/marketplace/*', 'CLEANING MICRO-APP DROP FOLDER');

    // Build all changed packages in the repo.
    await lerna.build(scopedPackages);

    // Update the repo readme RTW Version table with the latest information.
    // Note - This step must come after install because it uses a dependency.
    await node.updateReadmeRTW(GITHUB_TOKEN);

    await npm.command('run build:storybook', '', 'BUILDING STORYBOOK DOCUMENTATION');

    // Commit changes made to the readme.
    await git.commitAllConditional('docs(readme): semaphore - updated root readme [skip ci]', 'COMMITING UPDATES');

    // Push version and readme commits.
    await git.push('', GITHUB_TOKEN, 'PUSHING COMMITS');

    // Push version tags.
    await git.push('--tags', GITHUB_TOKEN, 'PUSHING VERSION TAGS');

    // Publish all micro-app bundles in the drop folder to the marketplace.
    await node.restUpload('PUBLISHING BUNDLES');

    await lerna.publish(scopedPackages);

  } catch (e) {
    console.log(`BUILD FAILED: ${e}`);
    throw e;
  }

})().catch((e) => { 
  return process.exit(1); 
});