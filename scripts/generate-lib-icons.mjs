#!/usr/bin/env node
// Generates `_lib-icons.generated.scss` and `icon.type.ts`
// from the IcoMoon project file ("selection.json" export).
//
// Usage: node scripts/generate-lib-icons.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Single source of truth: the project file exported from IcoMoon.
const SOURCE_ICOMOON_JSON = `${__dirname}/../assets-source/icons/dsicon.json`;
const OUTPUT_SCSS = `${__dirname}/../projects/ui-components/icon/src/_lib-icons.generated.scss`;
const OUTPUT_TS = `${__dirname}/../projects/ui-components/icon/src/icon.type.ts`;

// Desired prefix and font family name for the library — independent of what
// the original IcoMoon file contained (which used "libicon-"/"lib-icon").
const ICON_CLASS_PREFIX = 'libicon-';
const ICON_FONT_FAMILY = 'lib-icon';

const GENERATED_HEADER =
    '// ⚠️ AUTOMATICALLY GENERATED FILE — DO NOT EDIT MANUALLY.\n' +
    '// Source : assets-source/icons/dsicon.json (export projet IcoMoon)\n' +
    '// Regenerate with : npm run icons:generate\n';

function loadIcons() {
    const raw = readFileSync(SOURCE_ICOMOON_JSON, 'utf-8');
    const project = JSON.parse(raw);

    const icons = {};
    for (const entry of project.icons) {
        const name = `${ICON_CLASS_PREFIX}${entry.properties.name}`;
        const codepoint = entry.properties.code.toString(16);
        icons[name] = codepoint;
    }

    const names = Object.keys(icons);
    if (names.length === 0) {
        throw new Error('Aucune icône trouvée dans le fichier IcoMoon.');
    }

    return icons;
}

function generateScss(icons) {
    const rules = Object.entries(icons)
        .map(([name, codepoint]) => `  .${name}::before {\n    content: '\\${codepoint}';\n  }`)
        .join('\n\n');

    return `${GENERATED_HEADER}
@font-face {
  font-family: '${ICON_FONT_FAMILY}';
  src: url('./fonts/ds-icon.eot');
  src: url('./fonts/ds-icon.eot?#iefix') format('embedded-opentype'),
       url('./fonts/ds-icon.woff') format('woff'),
       url('./fonts/ds-icon.ttf') format('truetype'),
       url('./fonts/ds-icon.svg#${ICON_FONT_FAMILY}') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^='${ICON_CLASS_PREFIX}'],
[class*=' ${ICON_CLASS_PREFIX}'] {
  font-family: '${ICON_FONT_FAMILY}' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  speak: never;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${rules}
`;
}

function generateTypeScript(icons) {
    const names = Object.keys(icons);
    const union = names.map(name => `  | '${name}'`).join('\n');

    return `${GENERATED_HEADER}
export type LibIconName =
${union};

export const LIB_ICON_NAMES: readonly LibIconName[] = [
${names.map(name => `  '${name}'`).join(',\n')}
] as const;
`;
}

function ensureDir(filePath) {
    mkdirSync(dirname(filePath), { recursive: true });
}

function main() {
    const icons = loadIcons();

    ensureDir(OUTPUT_SCSS);
    writeFileSync(OUTPUT_SCSS, generateScss(icons), 'utf-8');

    ensureDir(OUTPUT_TS);
    writeFileSync(OUTPUT_TS, generateTypeScript(icons), 'utf-8');

    console.log(`✓ ${Object.keys(icons).length} generated icons (préfixe "${ICON_CLASS_PREFIX}") :`);
    console.log(`  - ${OUTPUT_SCSS}`);
    console.log(`  - ${OUTPUT_TS}`);
}

main();