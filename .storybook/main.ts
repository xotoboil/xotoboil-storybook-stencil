module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@ljcl/storybook-addon-cssprops",
    "@storybook/addon-essentials",
    'storybook-addon-designs',
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "@storybook/addon-controls",
    "@storybook/addon-interactions",
    '@storybook/preset-scss',
  ],

  "framework": {
    name: "@storybook/html-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
}
