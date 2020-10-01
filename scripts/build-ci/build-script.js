const npm = require('./npm-commands');
const lerna = require('./lerna-commands');

(async () => {

  try {

    // Install the Lerna mono-repo manager.
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

    // Install package dependencies.
    await npm.ci();

    // Build all changed packages.
    await lerna.build(scopedPackages);

    // Perform unit tests on all changed packages.
    // await lerna.jestCoverage(scopedPackages);

  } catch (e) {
    console.log(`BUILD FAILED: ${e}`);
    throw e;
  }

})().catch((e) => { 
  return process.exit(1); 
});
