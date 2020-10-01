import { configure, addParameters, addDecorator } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import 'storybook-chroma';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

addDecorator(withTests({ results }));
addDecorator(withPropsTable);
addDecorator(addReadme);
addDecorator(withA11y);

const req = require.context('..', true, /^(?!node_modules).\/((?!node_modules).)*\/*\/[^\/]+\/*.story.js$/);
// const req = require.context('../micro-apps', true, /^(?:[^\/]*\/)*stories\/([^\.]*\.story.js)$/);
// const req = require.context("..", true, /micro-apps\/((?!node_modules).)*\/*\/[^\/]+\/*.story.js$/);
configure(() => {
  req.keys().forEach((filename) => {
    req(filename);
  });
}, module);

addParameters({
  info: {
    inline: false,
  },
});
