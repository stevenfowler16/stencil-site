import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    { type: 'www' },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/prerender'
    }
  ],
  globalStyle: 'src/global/style/app.css'
};
