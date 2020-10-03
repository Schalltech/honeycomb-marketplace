

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

### React Applications
The following is a basic example to illustrate how a Honeycomb Micro App could be integrated with a React application.

#### Installation

1. Download and install the honeycomb-react-microapp package.

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
3. Incorporate the a micro-app into your application. In this example we are using a simple image micro app for illustration purposes.

   ```js
   <MicroApp
        config={{
          View: {
            Scope: 'schalltech',
            Name: 'image',
            Version: 'latest',
          },
          DefaultSource: '<url to your image>'
      }}
   />
   ```

#### Integration
The following is an example of how the Image micro-app could be integrated into an existing application. **Note:** The version number referenced below is for illustration purposes only. You will need to specify the version of the micro app that will be used.

To prevent multiple versions from being loaded, Honeycomb micro-apps require the host to provide references to React and ReactDOM globally. This can be included in your host applications app.js. Then you can import and render the `<MicroApp />` component any where within your application that you would like to incorporate micro-apps.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import MicroApp from '@schalltech/honeycomb-react-microapp';

window.React = React;
window.ReactDOM = ReactDOM;

const App = () => {

  return (
    <MicroApp
        config={{
          View: {
            Scope: 'schalltech',
            Name: 'image',
            Version: '0.0.1',
          },
          DefaultSource: 'https://microapp.services/cdn/media/5f73cb2a8a49a4204cd980b0'
        }}
      />
  );
});

export default App;
```

### Creating Micro Apps

Honeycomb makes it easier than ever to build your own micro apps to use within your applications or publish to the Honeycomb Marketplace to share with the community. To make it easy to get up and running, Honeycomb provides a [templated repository](https://github.com/Schalltech/honeycomb-microapp-repo) to manage your micro apps and [Honeycomb CLI](https://www.npmjs.com/package/@schalltech/honeycomb-cli) that will generate the scaffolding of your micro app with a single `create-micro-app` command.

#### Repository Template
Honeycomb provides a mono-repository [template](https://github.com/Schalltech/honeycomb-microapp-repo) developers can clone that comes pre-configured with [Lerna](https://github.com/lerna/lerna) for managing micro app dependencies, [Storybook](https://storybook.js.org) for isolated development and a local version of the marketplace for serving micro app requests while running locally. 

#### Honeycomb CLI
Complementing the micro app repository, Honeycomb also provides a command line interface (CLI) that will generate the [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) scaffolding of your micro app with the simple command `create-micro-app`. This will generate a fully functioning `Hello World` micro app that you can then customize with your required functionality.

> **Note:** At this time, the CLI is intended to be used with the provided repository template as it contains the build scripts and other required configurations for the micro apps to function properly.

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
