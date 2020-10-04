import React from 'react';
import { storiesOf } from '@storybook/react';
import { MicroApp } from '@schalltech/honeycomb-react-microapp';
import { createBrowserHistory } from 'history';
import Readme from '../README.md';
import App from '../src/app';

storiesOf('Micro Apps|Redbox Demo', module)
  .addParameters({
    props: {
      propTables: [App],
      propTablesExclude: [MicroApp],
    },
    readme: {
      sidebar: Readme,
      codeTheme: 'github',
    },
    options: { showPanel: true },
  }).add('Overview', () => {

    const defaultHistory = createBrowserHistory();

    return (
      <div style={{ display: 'flex' }}>
        <MicroApp
          config={{
            View: {
              Name: 'redbox-demo',
              Component: App,
            },
            Container: {
              display: 'flex',
              flex: '1 1 100%',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
          history={defaultHistory}
        />
      </div>
    );
  });
