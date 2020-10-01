const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

module.exports = {

  async install(packages, options, logMsg) {

    const command = `npm i ${packages} ${options}`;

    console.log('--------------------------------------------------------------------------');
    console.log(logMsg);
    console.log('--------------------------------------------------------------------------');
    console.log(`Command: ${command}\n`);
    const { stdout, stderr } = await execAsync(command);
    console.log(`${stdout}`);

    if (stderr !== '') {

      console.log(stderr);
    }
  },
  async ci() {

    const command = `npm i`;

    console.log('--------------------------------------------------------------------------');
    console.log('INSTALLING DEPENDENCIES');
    console.log('--------------------------------------------------------------------------');
    console.log(`Command: ${command}\n`);
    const { stdout, stderr } = await execAsync(command);
    console.log(`${stdout}`);

    if (stderr !== '') {

      console.log(stderr);
    }
  },
  async clean() {

    const command = `npm run clean`;

    console.log('--------------------------------------------------------------------------');
    console.log('NPM CLEAN');
    console.log('--------------------------------------------------------------------------');
    console.log(`Command: ${command}\n`);
    const { stdout, stderr } = await execAsync(command);
    console.log(`${stdout}`);

    if (stderr !== '') {

      console.log(stderr);
    }
  },
  async command(cmd, options, logMsg) {
    const command = `npm ${cmd} ${options}`;

    console.log('--------------------------------------------------------------------------');
    console.log(logMsg);
    console.log('--------------------------------------------------------------------------');
    console.log(`Command: ${command}\n`);
    const { stdout, stderr } = await execAsync(command);
    console.log(`${stdout}`);

    if (stderr !== '') {
      console.log(stderr);
    }
  },
};