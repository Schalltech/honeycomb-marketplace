/* eslint-disable no-unused-vars */
const { exec } = require('child_process');
const util = require('util');
// const del = require('del');
// const fs = require('fs');
// const path = require('path'./lerna-commands
const execAsync = util.promisify(exec);

module.exports = {

  async changed(scopeFilter, logMsg) {

    const command = `lerna changed --json --all --ignore-changes ${scopeFilter}`;

    try {
      const { stdout, stderr } = await execAsync(command);
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(`${stderr}`);

      let packages = '';
      let changes = '';

      console.log(`Packages: ${stdout}`);
      changes = JSON.parse(stdout);

      // Define the lerna scope filter based on the changed projects.
      if (changes.length > 1) {

        for (let i = 0; i < changes.length; i += 1) {

          packages += changes[i].name;

          if (i < changes.length - 1) {

            packages += ',';
          }
        }

        // Example: '--scope={package1,package2,package3}'
        packages = `--scope={${packages}}`;

      } else {

        // Example: '--scope=package1'
        packages = `--scope=${changes[0].name}`;
      }

      // // Example: '--scope package1 --scope package2 --scope package3}'
      // for (let i = 0; i < changes.length; i += 1) {

      //   packages += `--scope ${changes[i].name} `;
      // }

      console.log(`lerna filter option: ${packages}\n`);
      return packages;

    } catch (e) {

      const message = e.toString();

      if (message.includes('lerna info No changed packages found')) {

        console.log('--------------------------------------------------------------------------');
        console.log(logMsg);
        console.log('--------------------------------------------------------------------------');
        console.log(`Command: ${command}\n`);
        console.log(`${message.substring(message.indexOf('lerna notice'))}`);
        return '';
      }

      throw e;
    }
  },
  async version() {

    const command = 'lerna version --no-push --conventional-commits --yes --create-release github';

    console.log('--------------------------------------------------------------------------');
    console.log('VERSIONING CHANGED PACKAGES');
    console.log('--------------------------------------------------------------------------');
    console.log(`Command: ${command}\n`);
    const { stdout, stderr } = await execAsync(command);
    console.log(`${stderr}`);
    console.log(`${stdout}`);
  },
  async publish(scope) {

    const command = `lerna publish from-package --yes`;

    try {
      console.log('--------------------------------------------------------------------------');
      console.log('PUBLISHING CHANGED PACKAGES');
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      const { stdout, stderr } = await execAsync(command);
      console.log(`${stderr}`);
      console.log(`${stdout}`);

    } catch (e) {

      const message = e.toString();
      console.log(`Check Error: ${message}`);
      throw (e);
    }
  },
  async build(scope) {

    // const command = `lerna exec --concurrency 10 ${scope} -- npm run build`;
    const command = `lerna run build ${scope}`;

    try {
      console.log('--------------------------------------------------------------------------');
      console.log('BUILDING CHANGED PACKAGES');
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      const { stdout, stderr } = await execAsync(command);
      console.log(`${stderr}`);
      console.log(`${stdout}`);

    } catch (e) {

      const message = e.toString();
      console.log(`Check Error: ${e}`);
      throw (e);
    }
  },
  async jestCoverage(scope) {

    const command = `lerna exec --parallel ${scope} -- jest --coverage --passWithNoTests`;

    try {
      console.log('--------------------------------------------------------------------------');
      console.log('EXECUTING UNIT TESTS');
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      const { stdout, stderr } = await execAsync(command);
      console.log(`${stderr}`);
      console.log(`${stdout}`);

    } catch (e) {

      const message = e.toString();

      console.log(`Check Error: ${message}`);
    }
  },

};