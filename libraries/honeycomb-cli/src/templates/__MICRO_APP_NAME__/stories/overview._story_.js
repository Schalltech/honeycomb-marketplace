import React from 'react';
import { storiesOf } from '@storybook/react';
import { MicroApp } from '@schalltech/honeycomb-react-microapp';
import { createBrowserHistory } from 'history';
import Readme from '../README.md';
import App from '../src/app';

storiesOf('Micro Apps|__Micro_App_Name__', module)
  .addParameters({
    readme: {
      sidebar: Readme,
      codeTheme: 'github',
    },
    options: { showPanel: true },
  }).add('Overview', () => {

    const defaultHistory = createBrowserHistory();

    return (
      <div style={{ display: 'flex', height: 'calc(100vh - 16px)' }}>
        <MicroApp
          config={{
            View: {
              Name: '__MICRO_APP_NAME__',
              Component: App,
            },
            Container: {
              display: 'flex',
              flex: '1 1 100%',
              alignItems: 'center',
              justifyContent: 'center',
            },
            Attributes: {
              backgroundColor: '#FFCC00',
              color: '#333333',
            },
            Welcome: 'Welcome to the __MICRO_APP_NAME__ plugin!',
          }}
          history={defaultHistory}
        />
      </div>
    );
  });
