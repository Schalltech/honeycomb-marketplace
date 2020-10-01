/* eslint-disable class-methods-use-this */
/* eslint-disable lodash/import-scope */
const { Command, flags } = require('@oclif/command');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const shell = require('shelljs');
// const process = require('process');
const toPascalCase = require('js-pascalcase');
const toStartCase = require('lodash.startcase');

const toKebabCase = (str) => str
  && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');

// const userConfigFileName = 'create-micro-app.config.json';
// let userConfig;
let targetRoot;
let appKebabName;
let appPascalName;
let appStartName;

class CreateMicroAppCommand extends Command {

  async run() {
    console.log('\n');
    console.log('WELCOME TO HONEYCOMB MICRO-APP CLI');
    console.log('Directory', process.cwd());
    console.log('\n');

    // userConfig = await fs.readJSON(path.join(this.config.configDir, userConfigFileName));

    const responses = await inquirer.prompt([
      {
        name: 'microAppName',
        message: 'Enter the name of your micro-app:',
        type: 'input',
      },
    ]);

    appKebabName = toKebabCase(responses.microAppName);
    appPascalName = toPascalCase(responses.microAppName);
    appStartName = toStartCase(responses.microAppName);

    console.log('\n');
    console.log(`Generating ${responses.microAppName} micro app.`);
    
    await this.makeNew();
  }

  async makeNew() {

    targetRoot = `${process.cwd()}\\${appKebabName}`;

    shell.mkdir('-p', targetRoot);

    console.log('- copying files');
    await this.copy();
  }

  renameFile(oldName, newName, dir) {

    fs.rename(dir + oldName, dir + newName, (err) => {
      if (err) throw err;
    });
  }

  replaceContentKeys(key, value, dir, wildcard) {

    shell.ls('-R', dir + wildcard).forEach((filename) => {
      shell.sed('-i', key, value, path.resolve(dir, filename));
    });
  }

  async copy() {

    // Get a reference to the CLI template directory.
    const sourceRoot = path.resolve(__dirname, '..\\templates\\__MICRO_APP_NAME__');

    // Copy the contents from the template root to the micro-app root.
    const sourceRootContent = path.resolve(__dirname, `${sourceRoot}\\.*`);

    shell.cp('-R', sourceRootContent, targetRoot);

    // Get the path to the source templates component folder.
    const sourceComponentFolder = path.resolve(__dirname, `${sourceRoot}\\src\\components\\__MICRO_APP_NAME__\\*`);

    // Copy the contents from the source root to the target root, including sub-directories.
    shell.cp('-R', `${sourceRoot}\\*`, targetRoot);

    shell.rm('-rf', `${targetRoot}\\src\\components\\__MICRO_APP_NAME__`);
    shell.mkdir(`${targetRoot}\\src\\components\\${appKebabName}\\`);

    // Copy the contents from the source component folder to the target.
    shell.cp('-R', sourceComponentFolder, `${targetRoot}\\src\\components\\${appKebabName}\\`);

    // Rename the files.
    console.log('- generating data model...');
    this.renameFile('__MICRO_APP_NAME__.model.js', `${appKebabName}.model.js`, `${targetRoot}\\src\\components\\${appKebabName}\\`);

    console.log('- generating view model...');
    this.renameFile('__MICRO_APP_NAME__.view-model.js', `${appKebabName}.view-model.js`, `${targetRoot}\\src\\components\\${appKebabName}\\`);

    console.log('- generating view...');
    this.renameFile('__MICRO_APP_NAME__.view.jsx', `${appKebabName}.view.jsx`, `${targetRoot}\\src\\components\\${appKebabName}\\`);

    console.log('- generating default story...');
    this.renameFile('overview._story_.js', 'overview.story.js', `${targetRoot}\\stories\\`);

    if (await fs.existsSync(`${targetRoot}\\.npmignore`)) {
      this.renameFile('.npmignore', '.gitignore', `${targetRoot}\\`);
    }

    console.log('- generating readme...');
    await this.updateFileContent();

    console.log('\n');
    console.log(`Congrats! Your new micro-app ${appKebabName} has been created!`);
    console.log('\n');
  }

  async updateFileContent() {

    // Update file content.
    this.replaceContentKeys(/__MICRO_APP_NAME__/g, appKebabName, targetRoot, '\\**\\*.*');
    this.replaceContentKeys(/__MicroAppName__/g, appPascalName, targetRoot, '\\**\\*.*');
    this.replaceContentKeys(/__Micro_App_Name__/g, appStartName, targetRoot, '\\**\\*.*');
  }
}

CreateMicroAppCommand.description = `Describe the command here
...
Extra documentation goes here
`;

CreateMicroAppCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
};

module.exports = CreateMicroAppCommand;
