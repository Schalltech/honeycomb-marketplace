import React from 'react';
import { storiesOf } from '@storybook/react';
import { MicroApp } from '@schalltech/honeycomb-react-microapp';
import { createBrowserHistory } from 'history';
import Readme from '../README.md';
import App from '../src/app';

storiesOf('Micro Apps|Button', module)
  .addParameters({
    readme: {
      content: Readme,
      codeTheme: 'github',
    },
    options: { showPanel: false },
  }).add('Overview', () => {

    const defaultHistory = createBrowserHistory();

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ccc',
        margin: '20px 0px 20px 0px',
        fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
      }}
      >
        <div style={{
          display: 'flex', height: '40px', alignItems: 'center', padding: '10px 20px', backgroundColor: '#E5E5E5', fontWeight: 'bold',
        }}
        >
          <span>Examples</span>
        </div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'start', padding: '20px',
        }}
        >
          <div style={{ padding: '20px' }}>
            <span>Default Buttons</span>
            <div style={{
              display: 'flex', borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '3px', alignItems: 'center',
            }}
            >
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  DefaultText: 'Search',
                }}
                history={defaultHistory}
              />
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  Container: {
                    margin: '0px 10px 0px 10px',
                  },
                  DefaultText: 'Search',
                  ImgSrc: 'https://microapp.services/cdn/media/5f550a7d12896b22446ca58c',
                }}
                history={defaultHistory}
              />
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  ImgSrc: 'https://microapp.services/cdn/media/5f550a7d12896b22446ca58c',
                }}
                history={defaultHistory}
              />
            </div>
          </div>

          <div style={{ padding: '20px' }}>
            <span>Primary Buttons</span>
            <div style={{
              display: 'flex', borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '3px', alignItems: 'center',
            }}
            >
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  Attributes: {
                    backgroundColor: '#FFCC00',
                    color: '#333333',
                    border: '1px solid #FFCC00',
                    borderRadius: '5px',
                  },
                  DefaultText: 'Search',
                }}
                history={defaultHistory}
              />
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  Container: {
                    margin: '0px 10px 0px 10px',
                  },
                  Attributes: {
                    backgroundColor: '#FFCC00',
                    color: '#333333',
                    border: '1px solid #FFCC00',
                    borderRadius: '5px',
                  },
                  DefaultText: 'Search',
                  ImgSrc: 'https://microapp.services/cdn/media/5f550a7d12896b22446ca58c',
                }}
                history={defaultHistory}
              />
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  Attributes: {
                    backgroundColor: '#FFCC00',
                    color: '#333333',
                    border: '1px solid #FFCC00',
                    borderRadius: '5px',
                  },
                  ImgSrc: 'https://microapp.services/cdn/media/5f550a7d12896b22446ca58c',
                }}
                history={defaultHistory}
              />
            </div>
          </div>

          <div style={{ padding: '20px' }}>
            <span>Flat Buttons</span>
            <div style={{
              display: 'flex', borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '3px', alignItems: 'center',
            }}
            >
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  Attributes: {
                    border: 'none',
                  },
                  DefaultText: 'Search',
                }}
                history={defaultHistory}
              />
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  Container: {
                    margin: '0px 10px 0px 10px',
                  },
                  Attributes: {
                    border: 'none',
                  },
                  DefaultText: 'Search',
                  ImgSrc: 'https://microapp.services/cdn/media/5f550a7d12896b22446ca58c',
                }}
                history={defaultHistory}
              />
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  Attributes: {
                    border: 'none',
                  },
                  ImgSrc: 'https://microapp.services/cdn/media/5f550a7d12896b22446ca58c',
                }}
                history={defaultHistory}
              />
            </div>
          </div>

          <div style={{ padding: '20px' }}>
            <span>Outline Buttons</span>
            <div style={{
              display: 'flex', borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '3px', alignItems: 'center',
            }}
            >
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  Attributes: {
                    border: '1px solid #555555',
                    borderRadius: '5px',
                  },
                  DefaultText: 'Search',
                }}
                history={defaultHistory}
              />
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  Container: {
                    margin: '0px 10px 0px 10px',
                  },
                  Attributes: {
                    border: '1px solid #555555',
                    borderRadius: '5px',
                  },
                  DefaultText: 'Search',
                  ImgSrc: 'https://microapp.services/cdn/media/5f550a7d12896b22446ca58c',
                }}
                history={defaultHistory}
              />
              <MicroApp
                config={{
                  View: {
                    Name: 'ma-button',
                    Component: App,
                  },
                  Attributes: {
                    border: '1px solid #555555',
                    borderRadius: '5px',
                  },
                  ImgSrc: 'https://microapp.services/cdn/media/5f550a7d12896b22446ca58c',
                }}
                history={defaultHistory}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });
