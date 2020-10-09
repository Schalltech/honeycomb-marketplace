## Basic Usage
The following example demonstrates the Cloudinary micro app in action.

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
3. Incorporate the Cloudinary micro-app into your application.

   ```js
   <MicroApp
        config={{
          View: {
            Scope: 'schalltech',
            Name: 'cloudinary',
            Version: 'latest',
          }
      }}
   />
   ```

## Integration Example
The following is an example of how the Cloudinary micro-app could be integrated into an existing application. To prevent multiple versions from being loaded, Honeycomb micro-apps require the host to provide references to React and ReactDOM externally. This only has to be done once and can be included in your host applications app.js.

**Note:** The version number referenced below is for illustration purposes only. You will need to provide the version of the Cloudinary you want to use. A link to the Cloudinary changelog is provided in the Additional Information section below where you can review the release notes for specific versions.

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
            Name: 'cloudinary',
            Version: '0.0.1',
          }
        }}
      />
  );
});

export default App;
```
