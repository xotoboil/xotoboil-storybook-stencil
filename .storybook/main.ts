const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],

  typescript: {
    reactDocgen: 'react-docgen',
    skipBabel: true,
    check: false,
  },
  "addons": [
    "@storybook/addon-links",
    "@ljcl/storybook-addon-cssprops",
    "@storybook/addon-essentials",
    'storybook-addon-designs',
    "@storybook/addon-interactions",
    '@storybook/preset-scss',
  ],

  docs: {
    autodocs: 'tag',
    defaultName: 'readme',
  },

  "framework": {
    name: "@storybook/html-webpack5",
    options: {}
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src"),
    }
    return config;

  }

}
