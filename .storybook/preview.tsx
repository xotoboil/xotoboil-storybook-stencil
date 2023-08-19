import React from 'react';
import { defineCustomElements } from '../loader';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import readme from './readme.mdx';
import { create } from '@storybook/theming';

defineCustomElements();

export const parameters = {
  designToken: {
    defaultTab: 'Colors',
    styleInjection: '@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");'
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { default: 'light' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    hierarchySeparator: /\//,
    hierarchyRootSeparator: '|',
    storySort: {
      method: 'alphabetical',
      order: [ 'intro', ['readme', 'changelog', 'style'], 'plugin', 'organisme', 'molecule', 'atom' ],
      locales: 'en-US',
    },
  },
  docs: {
    page: readme,
    toc: {
      headingSelector: 'h1, h2, h3',
      ignoreSelector: '#primary',
      title: 'table of contents',
      disable: false,
      unsafeTocbotOptions: {
        orderedList: false,
      },
    },
  },
}
