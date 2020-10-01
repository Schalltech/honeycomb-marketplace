const path = require('path');
const shell = require('shelljs');

// Get a reference to the repo .hooks folder.
let sourceRoot = path.resolve(__dirname, '../.hooks');

// Get a reference to the local .git/hooks directory.
let targetRoot = path.resolve(__dirname, '../.git/hooks');

// Specify a wildcard for all files in the repo hooks folder.
let sourceRootContent = path.resolve(__dirname, `${sourceRoot}/*`);

// Copy all files from the .hooks folder to the local .git/hooks directory.
shell.cp('-R', sourceRootContent, targetRoot);

// Get a reference to the local home directory.
const homedir = require('os').homedir();

// Get a reference to the root directory of the repo.
sourceRoot = path.resolve(__dirname, '../');

// Get a reference to the local home directory.
targetRoot = path.resolve(__dirname, homedir);

// Specify the path to the projects .npmrc file.
sourceRootContent = path.resolve(__dirname, `${sourceRoot}/.npmrc`);

// Copy the .npmrc file from the repo root folder to the local home directory.
shell.cp('-R', sourceRootContent, targetRoot);
