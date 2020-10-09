import React from 'react';
import { storiesOf } from '@storybook/react';
import { MicroApp } from '@schalltech/honeycomb-react-microapp';
import Readme from '../README.md';
import App from '../src/app';

storiesOf('Micro Apps|Cloudinary', module)
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
  }).add('Overview', () => (
    <div style={{ display: 'flex' }}>
      <MicroApp
        config={{
          View: {
            Name: 'cloudinary',
            Component: App,
          },
          Container: {
            display: 'flex',
            flex: '1 1 100%',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
    </div>
  ));
