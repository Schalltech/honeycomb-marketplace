

# Honeycomb Micro Apps
*ATTN: Honeycomb Studio, Honeycomb Marketplace, microapps, components and libraries are in pre-release and are not intended to be used in a production environment. The platform is currently under development and releases are not guaranteed to be backwards compatible.*

<img src="https://microapp.services/cdn/media/5f53f90acf690435dcae31d8"/>

<p align="center">  
   <a href="http://commitizen.github.io/cz-cli/" target="_blank">
      <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
   </a>
   <a href="https://lerna.js.org/" target="_blank">
      <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg">
   </a>
   <a href="https://schalltech.github.io/honeycomb-marketplace" target="_blank">
     <img src="https://github.com/storybookjs/brand/blob/master/badge/badge-storybook.svg">
   </a>
</p>

## Contents

* [About](https://github.com/Schalltech/honeycomb-marketplace#about)
* [Getting Started](https://github.com/Schalltech/honeycomb-marketplace#getting-started)
* [Honeycomb Studio](https://github.com/Schalltech/honeycomb-marketplace#honeycomb-studio)
* [Honeycomb Marketplace](https://github.com/Schalltech/honeycomb-marketplace#honeycomb-marketplace)

## About

...

## Getting Started

There are multiple approaches that can be taken when using Honeycomb Micro Apps. One way is to use them as if they were traditionally coded components within a React application. Another approach is to create a single micro app that represents an entire page within the application. Using [Honeycomb Studio](https://microapp.studio), it is even possible to build a full featured web application composed entirely out of micro apps with dynamic routing.

### Using Micro Apps
The following is a basic example to illustrate how an existing Honeycomb Micro App could be integrated with a simple React application.

#### Installation

1. Download and install the [honeycomb-react-microapp](https://www.npmjs.com/package/@schalltech/honeycomb-react-microapp) package.

   ```bash
   npm i @schalltech/honeycomb-react-microapp
   ```
   ```bash
   yarn add @schalltech/honeycomb-react-microapp
   ```

2. Once installed, import the package module

   ```jsx
   import MicroApp from '@schalltech/honeycomb-react-microapp';
   ```

#### Integration
The following is an example of how the [Image micro-app](https://microapp.market/images/5efc0ce2fadf4c9fa418f51a) could be used in any React application. **Note:** The version number referenced below is for illustration purposes only. You will need to specify the version of the micro app that will be used.

To prevent multiple versions from being loaded, Honeycomb micro-apps require the host to provide references to React and ReactDOM globally. This can be included in your host applications app.js. Then you can import and render the `<MicroApp />` component any where within your application that you would like to incorporate micro apps.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import MicroApp from '@schalltech/honeycomb-react-microapp';

// React and ReactDOM are not bundled with the micro app.
// They must be exposed globally for micro apps as peer dependencies.
window.React = React;
window.ReactDOM = ReactDOM;

const App = () => {

  return (
    <MicroApp
        config={{
          View: {
            // The name of the micro app.
            Name: 'image',
            // The scope or owner of the micro app.
            Scope: 'schalltech',
            // The version of the micro app you want to use.
            // Accepts a specific semantic version (ex. 1.0.0) of the micro app or the filter 'latest' can be specified to ensure the latest available version is always used.
            Version: 'latest'
          },
          DefaultSource: 'https://microapp.services/cdn/media/5f73cb2a8a49a4204cd980b0'
        }}
      />
  );
});

export default App;
```

### Creating Micro Apps

Honeycomb makes it easier than ever to build your own micro apps to use within your applications or publish to the Honeycomb Marketplace to share with the community. To make it easy to get up and running, Honeycomb provides a [quickstart repository](https://github.com/Schalltech/honeycomb-microapp-repo) to manage your micro apps and [Honeycomb CLI](https://www.npmjs.com/package/@schalltech/honeycomb-cli) that will generate the scaffolding of your micro app with a single `create-micro-app` command.

#### Prerequisites

   1. Clone the [quickstart repository](https://github.com/Schalltech/honeycomb-microapp-repo) and open it with your favorite code editor.
   
   2. The quickstart repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that uses [Lerna](https://github.com/lerna/lerna) to manage dependencies across your micro app projects. You will need to install this first.
      ``` 
      npm install --global lerna@3.19.0
      ```
   
   3. [rimraf](https://github.com/isaacs/rimraf) is the UNIX command rm -rf for node and is used by the clean script to remove the root node modules folder.
      ```
      npm install --global rimraf
      ```
      
   4. Install Honeycomb CLI.
      ```
      npm install --global @schalltech/honeycomb-cli
      ```
      
#### Create a micro app

   1. Navigate to the `micro-apps` directory in the repo and generate your first micro app using the Honeycomb CLI. To follow along in the next section 'Render your micro app in a React Application', name your micro app 'hello-world' when prompted by the CLI.
      ```
      cd micro-apps
      npx @schalltech/honeycomb-cli@latest create-micro-app
      ```
      
   2. Run the bootstrap command. This will reference the generated micro app at the root of the repo and install all dependencies.
      ```
      npm run boostrap
      ```
      
   3. Launch Storybook to see your new micro app.
      ```
      npm run start
      ```

#### Render your micro app in a React application
Congratulations, you just created your first Honeycomb Micro App! Next we will cover how to render your micro app in a React application as if it were a standard component. In this section, you will need to have a React application handy to add your micro app to. Creating a React application will not be covered here. If you do not have an app available, you could use the popular [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) CLI tool to create one quickly.

   1. Open the React application in your favorite code editor and install the [honeycomb-react-microapp](https://www.npmjs.com/package/@schalltech/honeycomb-react-microapp) package.
   
      ```bash
      npm i @schalltech/honeycomb-react-microapp
      ```

   2. Once installed, import the package module.
   
      ```jsx
      import MicroApp from '@schalltech/honeycomb-react-microapp';
      ```
   
   3. Build your micro app.   

      ```bash
      npm run build:micro-apps
      ```
      
   4. Launch the local marketplace to serve requests for your micro app.
   
      ```bash
      npm run host:marketplace
      ```
      
   5. Incorporate the a micro app into your application. For the sake of simplicity, we are importing `<MicroApp />` in the app.js file. Exposing the React and ReactDOM modules globally must be done in the code before attempting to render a micro app.
   
      ```js
      import React from 'react';
      import ReactDOM from 'react-dom';
      import MicroApp from '@schalltech/honeycomb-react-microapp';

      // React and ReactDOM are not bundled with the micro app.
      // They must be exposed globally for micro apps as peer dependencies.
      window.React = React;
      window.ReactDOM = ReactDOM;

      const App = () => {

        return (
          <MicroApp
              config={{
                View: {
                  // This should be the name of your micro app. If you named it something different, make sure this matches.
                  Name: 'hello-world',
                  // When running locally, we do not specify the scope and version of the micro app. The path to the micro app is provided instead.
                  // By default, the local marketplace uses port 3001. Make sure the port and micro app name is correctly referenced in the url.
                  Path: 'http://localhost:3001/marketplace/hello-world/hello-world.js',
                }
              }}
            />
        );
      });

      export default App;
      ```
## Honeycomb Studio

...

## Honeycomb Marketplace

The [Honeycomb Marketplace](https://microapp.market/search) is a micro app store where developers and content creators can browse for micro apps to enhance their applications that have been released with the platform or created by the community. 

<!-- latest rtw -->
#### Honeycomb Applications
Integrate and extend the functionality of your Honeycomb applications with these pre-built micro apps.
Latest Version (RTW) | readme | demo  | changelog  | bundle | source map 
:---- | :-----: | :-----: | :-----: | :-----: | :----:
![button](https://img.shields.io/badge/dynamic/json?color=green&logo=react&style=flat-square&label=button&prefix=Version%20&query=%24.version&url=https://raw.githubusercontent.com/Schalltech/honeycomb-marketplace/master/micro-apps/button/package.json) | [view](https://github.com/Schalltech/honeycomb-marketplace/blob/master/micro-apps/button/README.md) | --- | [view](https://github.com/Schalltech/honeycomb-marketplace/blob/master/micro-apps/button/CHANGELOG.md) | [download](https://microapp.services/cdn/bundle/schalltech/button@0.0.0-beta.8) | [download](---)
![image](https://img.shields.io/badge/dynamic/json?color=green&logo=react&style=flat-square&label=image&prefix=Version%20&query=%24.version&url=https://raw.githubusercontent.com/Schalltech/honeycomb-marketplace/master/micro-apps/image/package.json) | [view](https://github.com/Schalltech/honeycomb-marketplace/blob/master/micro-apps/image/README.md) | --- | [view](https://github.com/Schalltech/honeycomb-marketplace/blob/master/micro-apps/image/CHANGELOG.md) | [download](https://microapp.services/cdn/bundle/schalltech/image@0.0.0-beta.4) | [download](---)
![textbox](https://img.shields.io/badge/dynamic/json?color=green&logo=react&style=flat-square&label=textbox&prefix=Version%20&query=%24.version&url=https://raw.githubusercontent.com/Schalltech/honeycomb-marketplace/master/micro-apps/textbox/package.json) | [view](https://github.com/Schalltech/honeycomb-marketplace/blob/master/micro-apps/textbox/README.md) | --- | [view](https://github.com/Schalltech/honeycomb-marketplace/blob/master/micro-apps/textbox/CHANGELOG.md) | [download](https://microapp.services/cdn/bundle/schalltech/textbox@0.0.0-beta.2) | [download](---)
<!-- latest rtw stop -->
