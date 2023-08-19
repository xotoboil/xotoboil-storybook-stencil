import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'xotoboil-storybook-stencil',
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader', },
    { type: 'dist-custom-elements', },
    { type: 'docs-readme', },
    { type: 'www', serviceWorker: null },
  ],
  plugins: [
    sass()
  ]
};
