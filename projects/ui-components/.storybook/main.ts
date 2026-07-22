import type { StorybookConfig } from '@storybook/angular-vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import type { Plugin } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PROJECT_ROOT = resolve(__dirname, '..');

const { entryPoints } = JSON.parse(
  readFileSync(resolve(PROJECT_ROOT, 'entry-points.json'), 'utf-8'),
);

const MAIN_TITLE = 'Mon Design System — Storybook';
const IFRAME_TITLE = 'Mon Design System — Canvas';

function customStorybookTitlePlugin(): Plugin {
  return {
    name: 'custom-storybook-title',

    transformIndexHtml(html, ctx) {
      const isIframe = ctx.filename.includes('iframe.html');
      const newTitle = isIframe ? IFRAME_TITLE : MAIN_TITLE;

      return html.replace(
        /<title>.*?<\/title>/gi,
        `<title>${newTitle}</title>`,
      );
    },
  };
}

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  /**
   * Static assets
   *
   * Source:
   *   projects/ui-components/flag/src
   *
   * Output:
   *   /assets/flags
   *
   * Therefore:
   *   flags-sprite.svg
   * becomes:
   *   /assets/flags/flags-sprite.svg
   */
  staticDirs: [
    {
      from: resolve(PROJECT_ROOT, 'flag/src'),
      to: '/assets/flags',
    },
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

  managerHead: (head) => `
    ${head}
    <title>${MAIN_TITLE}</title>
  `,

  previewHead: (head) => `
    ${head}
    <script>
      document.title = "${IFRAME_TITLE}";
    </script>
  `,

  async viteFinal(config, { configType }) {
    const isProduction = configType === 'PRODUCTION';

    /**
     * GitHub Pages
     *
     * Production:
     *   https://balha147.github.io/ds-lib/
     *
     * Local:
     *   http://localhost:6006/
     */
    config.base = isProduction ? '/ds-lib/' : '/';

    /**
     * Resolve aliases for the UI component library.
     */
    config.resolve ??= {};

    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),

      ...Object.fromEntries(
        entryPoints.map((name: string) => [
          `@ds-design-system/ui-components/${name}`,
          resolve(
            PROJECT_ROOT,
            `${name}/src/public-api.ts`,
          ),
        ]),
      ),

      '@ds-design-system/ui-components': resolve(
        PROJECT_ROOT,
        'src/public-api.ts',
      ),
    };

    /**
     * Vite dependency optimization.
     */
    config.optimizeDeps ??= {};

    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include ?? []),
      '@angular/core',
      '@angular/common',
      '@angular/forms',
      '@angular/platform-browser',
      'bootstrap',
    ];

    /**
     * SCSS configuration.
     */
    config.css ??= {};
    config.css.preprocessorOptions ??= {};

    config.css.preprocessorOptions.scss = {
      ...(config.css.preprocessorOptions.scss ?? {}),

      loadPaths: [
        resolve(__dirname, '../../../node_modules'),
      ],

      silenceDeprecations: [
        'import',
        'if-function',
        'global-builtin',
        'color-functions',
      ],
    };

    /**
     * Custom Storybook plugins.
     */
    config.plugins ??= [];

    config.plugins.push(
      customStorybookTitlePlugin(),
    );

    return config;
  },
};

export default config;