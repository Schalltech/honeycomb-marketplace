const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

module.exports = {

  async push(options, token, logMsg) {

    const command = `git push "https://Schalltech:${token}@github.com/Schalltech/honeycomb-marketplace" ${options}`;

    try {
      const { stdout, stderr } = await execAsync(command);
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(stderr);
      console.log(stdout);

    } catch (e) {

      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(e.toString(), e);
      throw (e);
    }
  },
  async commitAllConditional(commitMessage, logMsg) {

    let command = 'git add -A';

    try {
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);

      const { stdoutAdd, stderrAdd } = await execAsync(command);
      console.log(stderrAdd);
      console.log(`${stdoutAdd}\n`);

      command = `git diff-index --quiet HEAD || git commit -m "${commitMessage}"`;
      console.log(`Command: ${command}\n`);
      
      const { stdout, stderr } = await execAsync(command);
      console.log(stderr);
      console.log(stdout);

    } catch (e) {
      console.log(e.toString(), e);
      throw (e);
    }
  },
  async commit(options, logMsg) {

    const command = `git commit ${options}`;

    try {
      const { stdout, stderr } = await execAsync(command);
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(stderr);
      console.log(stdout);

    } catch (e) {

      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(e.toString(), e);
      throw (e);
    }
  },
  async status(options, logMsg) {

    const command = `git status ${options}`;

    try {
      const { stdout, stderr } = await execAsync(command);
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(stderr);
      console.log(stdout);

    } catch (e) {

      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(e.toString(), e);
      throw (e);
    }
  },
  async checkout(options, logMsg) {

    const command = `git checkout ${options}`;

    try {
      const { stdout, stderr } = await execAsync(command);
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(stderr);
      console.log(stdout);

    } catch (e) {

      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(e.toString(), e);
      throw (e);
    }
  },
};