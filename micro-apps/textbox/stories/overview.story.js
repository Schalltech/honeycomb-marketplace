import React from 'react';
import { storiesOf } from '@storybook/react';
import { MicroApp } from '@schalltech/honeycomb-react-microapp';
import { createBrowserHistory } from 'history';
import Readme from '../README.md';
import App from '../src/app';

storiesOf('Micro Apps|Textbox', module)
  .addParameters({
    readme: {
      content: Readme,
      codeTheme: 'github',
    },
    options: { showPanel: false },
  }).add('Overview', () => {

    const defaultHistory = createBrowserHistory();

    return (
      <div style={{ display: 'flex' }}>
        <MicroApp
          config={{
            View: {
              Name: 'textbox',
              Component: App,
            },
            Container: {
              padding: '40px 0px',
            },
          }}
          history={defaultHistory}
        />
      </div>
    );
  });
