Latest RTW Version | Changelog 
:---- | :-----: 
![button](https://img.shields.io/badge/dynamic/json?color=green&logo=react&style=flat-square&label=ma-button&prefix=Version%20&query=%24.version&url=https://github.com/Schalltech/honeycomb-marketplace/blob/master/micro-apps/shared/ma-button/package.json) | [view](https://github.com/Schalltech/honeycomb-marketplace/blob/master/micro-apps/shared/ma-button/CHANGELOG.md) 

# Honeycomb Buttons Overview

## Basic Usage
The following example demonstrates the Button micro apps in action.

<!-- STORY -->

## Installation

1. Download and install the micro-app loader package.

  ```bash
   yarn add @schalltech/honeycomb-react-microapp
   ```
   ```bash
   npm i @schalltech/honeycomb-react-microapp
   ```

2. Incorporate the Button micro-app into your application. 

   ```jsx
   import React, { Component } from 'react';
   import MicroApp from '@schalltech/honeycomb-react-microapp';

   class ExampleHost extends Component {
     render() {
       return (
         <MicroApp
           config={{
             View: {
               Name: 'button',
               Scope: 'schalltech',
               Version: 'latest',
             },
             Attributes: {
               border: '1px solid #555555',
               borderRadius: '5px',
             },
             DefaultText: 'Search',
             ImgSrc: 'https://microapp.services/cdn/media/5f550a7d12896b22446ca58c',
           }}
         />
       );
     }
   }

   export default ExampleHost;
   ```

