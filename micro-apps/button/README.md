Latest RTW Version | Changelog 
:---- | :-----: 
![button](https://img.shields.io/badge/dynamic/json?color=green&logo=react&style=flat-square&label=ma-button&prefix=Version%20&query=%24.version&url=https://github.com/Schalltech/honeycomb-marketplace/blob/master/micro-apps/shared/ma-button/package.json) | [view](https://github.com/Schalltech/honeycomb-marketplace/blob/master/micro-apps/shared/ma-button/CHANGELOG.md) 

# Honeycomb Button Overview

## Basic Usage
The following example demonstrates the Button micro app in action.

<!-- STORY -->

## Installation

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
3. Incorporate the Image micro-app into your application.

   ```js
   <MicroApp
        config={{
          View: {
            Scope: 'schalltech',
            Name: 'button',
            Version: 'latest',
          }
      }}
   />
   ```

## Integration Example
The following is an example of how the Button micro-app could be integrated into an existing application. **Note:** The version number referenced below is for illustration purposes only. You will need to provide the version of the Button you want to use. A link to the Button changelog is provided above to review release notes for specific versions.

To prevent multiple versions from being loaded, Honeycomb micro-apps require the host to provide references to React and ReactDOM externally. This can be included in your host applications app.js. Then you can import and render the `<MicroApp />` component any where within your application that you would like to incorporate micro-apps.

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
            Name: 'button',
            Version: '0.0.1',
          }
        }}
      />
  );
});

export default App;
```

