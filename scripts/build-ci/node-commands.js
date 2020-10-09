const del = require('del');
const fs = require('fs');
const path = require('path');
const ftp = require("basic-ftp");
const rest = require('../rest');
const FormData = require('form-data');

let GitHubToken;

module.exports = {

  async cleanDir(dir, logMsg) {

    const deletedPaths = await del([dir]);
    console.log('--------------------------------------------------------------------------');
    console.log(logMsg);
    console.log('--------------------------------------------------------------------------');
    console.log(`Path: ${dir}\n`);

    const contents = deletedPaths.join('\n');

    if (contents !== '') {

      console.log('Deleted:');
      console.log(contents);
      console.log('');
    } else {

      console.log('Directory was empty. \n');
    }
  },
  async restUpload(publishKey, logMsg) {

    console.log('--------------------------------------------------------------------------');
    console.log(logMsg);
    console.log('--------------------------------------------------------------------------');

    const DROP_FOLDER = 'applications/app-local-marketplace/public/marketplace';
    const files = listFiles(DROP_FOLDER, []);

    let appName;
    let appVersion;

    for (const file of files) {

      // We only want to deploy js bundles and map files.
      if (file.endsWith('.js')) { // || file.endsWith('.js.map') || file.endsWith('.json')) {

        const fileName = file.substring(file.lastIndexOf('/') + 1);

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append('File', fs.createReadStream(file));

        try {

          // Parse the micro apps name from the file name.
          appName = fileName.substr(0, fileName.indexOf('.'));

          // Parse the micro apps version from the file name.
          appVersion = fileName.substr(0, fileName.lastIndexOf('.')).replace(`${appName}.`, '');

          // All native honeycomb micro apps will have 'schalltech' as the scoope.
          let scope = 'schalltech';

          // Demo micro apps belong to the beekeeper scope.
          if (appName === 'redbox-demo') {
            scope = 'beekeeper';
          }

          // Remove the ma- prefix and special chars from the micro apps name.
          appName = appName.replace(/-/g, ' ');

          // const deployServer = 'http://localhost:4001';
          const deployServer = 'https://microapp.services';
          const url = `${deployServer}/api/marketplace/plugins/version/publish/${scope}/${appName}/${appVersion}/${publishKey}`;
          console.log('UPLOADING Bundle:', `${scope}/${appName}/${appVersion}`);

          await formData.submit(url, function(err, res) {
            // res – response object (http.IncomingMessage)

            if (res) {
              console.log(`Status: ${res.statusCode}: ${res.statusMessage} - ${res.req.path.replace(publishKey, '')}`);
            }

            if (err) {
              console.log(`ERROR: ${err}`);
              throw err;
            }

            // res.resume();
          });
        }
          catch(err) {
          console.log(err);
        }
      }
    }
  },
  updateReadmeRTW(token) {

    GitHubToken = token;

    const file = path.resolve('./', 'README.md');

    const data = fs.readFileSync(file, 'utf-8');

    console.log('--------------------------------------------------------------------------');
    console.log('UPDATING README WITH LATEST RTW VERSIONS');
    console.log('--------------------------------------------------------------------------');

    const startSearchText = '<!-- latest rtw -->';
    const stopSearchText = '<!-- latest rtw stop -->';

    const startIndex = data.indexOf(startSearchText) + startSearchText.length;
    const stopIndex = data.indexOf(stopSearchText);

    buildVersionTable(data, startIndex, stopIndex);
  },
};

function getVersion(filePath) {

  let version;

  if (fs.existsSync(`${filePath}/package.json`)) {

    const file = path.resolve(filePath, 'package.json');
    const data = fs.readFileSync(file);
    const json = JSON.parse(data.toString());
    version = json.version;
  }

  return version;
}

function getReadmeLink(microAppName) {

  const relativePath = `micro-apps/${microAppName}/README.md`;
  if (fs.existsSync(`./${relativePath}`)) {
    return `[view](https://github.com/Schalltech/honeycomb-marketplace/blob/master/${relativePath})`;
  }

  return '---';
}

function getChangeLogLink(microAppName) {

  const relativePath = `micro-apps/${microAppName}/CHANGELOG.md`;
  if (fs.existsSync(`./${relativePath}`)) {

    return `[view](https://github.com/Schalltech/honeycomb-marketplace/blob/master/${relativePath})`;
  }

  console.log(`\n\n${relativePath}`);
  return '---';
}

function getDemoLink( microAppName) {

  // const relativePath = `micro-apps/${microAppName}/src/components/${microAppName.replace('', '').replace('ma-', '')}/stories/overview.story.js`;

  // if (fs.existsSync(`./${relativePath}`)) {

  //   const data = fs.readFileSync(relativePath, 'utf-8');
  //   const startKey = "storiesOf('";
  //   const stopKey = "', module)";
  //   const startIndex = data.indexOf(startKey);
  //   const stopIndex = data.indexOf(stopKey);

  //   if (startIndex >= 0 && stopIndex >= 0) {

  //     const linkFragment = encodeURI(data.substring(startIndex + startKey.length, stopIndex));
  //     return `[view](https://www.chromaui.com/component?appId=${ChromaAppId}&name=${linkFragment})`;
  //   }
  // }

  return '---';
}

function buildVersionTable(data, startIndex, stopIndex) {

  // const toStartCase = require('lodash.startcase');

  let table = '';

  const dirName = './micro-apps/';

  const folders = fs.readdirSync(`${dirName}`);

  let tableRows = '';

  folders.forEach((folder) => {

    const microAppName = folder;
    const microAppVersion = getVersion(`${dirName}/${folder}/`);

    if (microAppVersion !== undefined) {

      const packageJsonUrl = `https://raw.githubusercontent.com/Schalltech/honeycomb-marketplace/master/micro-apps/${microAppName}/package.json`;
      const badgeUrl = `https://img.shields.io/badge/dynamic/json?color=green&logo=react&style=flat-square&label=${microAppName}&prefix=Version%20&query=%24.version&url=${packageJsonUrl}`;
      const readMeUrl = getReadmeLink(microAppName);
      const demoUrl = getDemoLink(microAppName);
      const changelogUrl = getChangeLogLink(microAppName);
      const bundleUrl = `https://microapp.services/cdn/bundle/schalltech/${microAppName}@${microAppVersion}`;
      const sourcemapUrl = '---'; // `https://honeycomb-marketplace.azurewebsites.net/plugins/${microAppName}/${microAppName}.${microAppVersion}/${microAppName}.${microAppVersion}.js.map`;

      tableRows += `\n![${microAppName}](${badgeUrl}) | ${readMeUrl} | ${demoUrl} | ${changelogUrl} | [download](${bundleUrl}) | [download](${sourcemapUrl})`;
    }
  });

  if (tableRows !== '') {

    table += '\n\n#### Honeycomb Applications\n';
    table += 'Integrate and extend the functionality of your applications with these pre-built micro-apps.\n\n';

    table += 'Latest Version (RTW) | readme | demo  | changelog  | bundle | source map \n';
    table += ':---- | :-----: | :-----: | :-----: | :-----: | :----:';
    table += tableRows;
  }

  const above = data.substr(0, startIndex);

  const below = data.substr(stopIndex);

  const content = `${above}\n${table}\n${below}`;

  fs.writeFileSync('./README.md', content, 'utf8');

  console.log('Update successful.\n');
}

function listFiles(dir, acc) {

  try {
  
    const files = fs.readdirSync(dir) || [];

    files.forEach((value) => {

      const name = `${dir}/${value}`;

      if (fs.statSync(name).isDirectory()) {

        listFiles(name, acc);
      } else {

        acc.push(name);
      }
    });

  } catch(e) {
    // Directory does not exist. Nothing to deploy...
  } finally {
    return acc;
  }
}