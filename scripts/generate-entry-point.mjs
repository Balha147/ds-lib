#!/usr/bin/env node
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '../projects/ui-components');

const entryPointName = process.argv[2];
if (!entryPointName) {
    console.error('Usage: node scripts/generate-entry-point.mjs <name>');
    console.error('Example: node scripts/generate-entry-point.mjs form-input');
    process.exit(1);
}

if (!/^[a-z][a-z0-9-]*$/.test(entryPointName)) {
    console.error('Name must be in kebab-case (letters, numbers, and hyphens only).');
    process.exit(1);
}

const entryDir = join(PROJECT_ROOT, entryPointName);
if (existsSync(entryDir)) {
    console.error(`Entry point "${entryPointName}" already exists.`);
    process.exit(1);
}

const componentName = entryPointName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

// 1. Create directory structure under projects/ui-components/<entryPointName>/src
mkdirSync(join(entryDir, 'src'), { recursive: true });

// 2. Entry point ng-package.json
writeFileSync(
    join(entryDir, 'ng-package.json'),
    JSON.stringify({ lib: { entryFile: 'src/public-api.ts' } }, null, 2) + '\n'
);

// 3. public-api.ts
writeFileSync(
    join(entryDir, 'src/public-api.ts'),
    `export * from './${entryPointName}';\n`
);

// 4. Angular component (.ts, .html, .scss)
writeFileSync(
    join(entryDir, `src/${entryPointName}.ts`),
    `import { Component } from '@angular/core';

@Component({
  selector: 'lib-${entryPointName}',
  templateUrl: './${entryPointName}.html',
  styleUrl: './${entryPointName}.scss',
})
export class ${componentName} {}
`
);

writeFileSync(join(entryDir, `src/${entryPointName}.html`), `<!-- ${componentName} -->\n`);
writeFileSync(join(entryDir, `src/${entryPointName}.scss`), `.lib-${entryPointName} {\n}\n`);

console.log(`✓ Entry point "${entryPointName}" successfully created in ${entryDir}:`);
console.log(`   - ${join(entryDir, 'ng-package.json')}`);
console.log(`   - ${join(entryDir, 'src/public-api.ts')}`);
console.log(`   - ${join(entryDir, `src/${entryPointName}.{ts,html,scss}`)}`);

// 5. Automatic index regeneration
console.log('');
console.log('→ Regenerating ENTRY_POINTS.md / tsconfig.paths.json / entry-points.json...');

const generateIndexScript = join(__dirname, 'generate-entry-points-index.mjs');
execFileSync(process.execPath, [generateIndexScript], { stdio: 'inherit' });

console.log('');
console.log('Next steps:');
console.log(`   1. Implement the component in ${join(entryDir, 'src')}`);
console.log(`   2. Add the Storybook story`);
console.log(`   3. import { ${componentName}Component } from '@ds-design-system/ui-components/${entryPointName}'`);