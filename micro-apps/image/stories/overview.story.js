import React from 'react';
import { storiesOf } from '@storybook/react';
import { MicroApp } from '@schalltech/honeycomb-react-microapp';
import { createBrowserHistory } from 'history';
import Readme from '../README.md';
import App from '../src/app';

storiesOf('Micro Apps|Image', module)
  .addParameters({
    readme: {
      content: Readme,
      codeTheme: 'github',
    },
    options: { showPanel: false },
  }).add('Overview', () => {

    const defaultHistory = createBrowserHistory();

    return (
      <div style={{ display: 'flex', margin: '20px 0px 20px 0px' }}>
        <MicroApp
          config={{
            View: {
              Name: 'image',
              Component: App,
            },
            Container: {
              display: 'flex',
              flex: '1 1 100%',
              alignItems: 'center',
              justifyContent: 'center',
            },
            Attributes: {
              borderRadius: '10px',
              overflow: 'hidden',
              maxHeight: '250px',
            },
            DefaultSource: 'https://microapp.services/cdn/media/5f73cb2a8a49a4204cd980b0',
          }}
          history={defaultHistory}
        />
      </div>
    );
  });
