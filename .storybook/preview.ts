import { defineCustomElements } from '../loader';

defineCustomElements();

// const tokenContext = require.context(
// 	'!!raw-loader!./styles/',
// 	true,
// 	/.\.(css|less|scss|vue)$/,
// )

// const tokenFiles = tokenContext.keys().map(function (filename) {
//   return { filename: filename, content: tokenContext(filename).default }
// })

export const parameters = {
  designToken: {
    defaultTab: 'Colors',
    // files: tokenFiles,
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
    storySort: {
      method: 'alphabetical',
      order: [
        'Intro',
        ['Readme', 'Changelog', 'Style'],
        'Plugins',
        'Organismes',
        'Molecules',
        'Atomes',
      ],
      locales: 'en-US',
    },
  },
}
