import type { StorybookConfig } from '@storybook/angular-vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');

const { entryPoints } = JSON.parse(
  readFileSync(resolve(PROJECT_ROOT, 'entry-points.json'), 'utf-8')
);

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  staticDirs: [
    { from: '../flag/src', to: '/assets/flags' }
  ],

  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/angular-vite',
    options: {},
  },

  typescript: {
    check: false,
  },

  async viteFinal(config) {
    config.resolve ??= {};

    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      ...Object.fromEntries(
        entryPoints.map((name: string) => [
          `@ds-design-system/ui-components/${name}`,
          resolve(PROJECT_ROOT, `${name}/src/public-api.ts`),
        ])
      ),
      '@ds-design-system/ui-components': resolve(
        PROJECT_ROOT,
        'src/public-api.ts'
      ),
    };

    config.optimizeDeps ??= {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include ?? []),
      '@angular/core',
      '@angular/common',
      '@angular/forms',
      '@angular/platform-browser',
      'bootstrap',
    ];

    config.css ??= {};
    config.css.preprocessorOptions ??= {};
    config.css.preprocessorOptions.scss = {
      ...(config.css.preprocessorOptions.scss ?? {}),
      loadPaths: [resolve(__dirname, '../../../node_modules')],
      silenceDeprecations: [
        'import',
        'if-function',
        'global-builtin',
        'color-functions',
      ],
    };

    return config;
  },
};

export default config;