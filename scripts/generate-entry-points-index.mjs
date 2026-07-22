import { readdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WORKSPACE_ROOT = resolve(__dirname, '..');
const PROJECT_ROOT = join(WORKSPACE_ROOT, 'projects/ui-components');
const PACKAGE_NAME = '@ds-design-system/ui-components';

const entryPoints = readdirSync(PROJECT_ROOT, { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name !== 'src')
    .filter(d => existsSync(join(PROJECT_ROOT, d.name, 'ng-package.json')))
    .map(d => d.name)
    .sort();

// --- ENTRY_POINTS.md ---
const mdLines = [
    `# Entry points for \`${PACKAGE_NAME}\``,
    '',
    '⚠️ Generated file — regenerate with `npm run generate:entry-points-index`.',
    '',
    '| Entry point | Import |',
    '|---|---|',
    ...entryPoints.map(name => `| \`${name}\` | \`import { ... } from '${PACKAGE_NAME}/${name}'\` |`)
];
writeFileSync(join(PROJECT_ROOT, 'ENTRY_POINTS.md'), mdLines.join('\n') + '\n');

// --- tsconfig.paths.json ---
const paths = {};
for (const name of entryPoints) {
    paths[`${PACKAGE_NAME}/${name}`] = [`./projects/ui-components/${name}/src/public-api.ts`];
}
paths[PACKAGE_NAME] = ['./projects/ui-components/src/public-api.ts'];

const tsconfigPaths = {
    compilerOptions: { paths }
};

const tsconfigPathFile = join(WORKSPACE_ROOT, 'tsconfig.paths.json');
writeFileSync(tsconfigPathFile, JSON.stringify(tsconfigPaths, null, 2) + '\n');

// --- entry-points.json ---
writeFileSync(
    join(PROJECT_ROOT, 'entry-points.json'),
    JSON.stringify({ entryPoints }, null, 2) + '\n'
);

console.log(`✓ Updated ${entryPoints.length} entry points in ${tsconfigPathFile}`);