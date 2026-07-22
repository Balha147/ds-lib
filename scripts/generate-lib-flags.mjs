import {
    readdirSync,
    readFileSync,
    writeFileSync,
    mkdirSync,
} from 'node:fs';

import {
    dirname,
    join,
    resolve,
} from 'node:path';

import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PROJECT_ROOT = resolve(__dirname, '..');

const SOURCE_DIR = join(
    PROJECT_ROOT,
    'node_modules',
    'flag-icons',
    'flags',
    '4x3',
);

const OUTPUT_DIR = join(
    PROJECT_ROOT,
    'projects',
    'ui-components',
    'flag',
    'src',
);

const OUTPUT_SPRITE = join(
    OUTPUT_DIR,
    'flags-sprite.svg',
);

const OUTPUT_TS = join(
    OUTPUT_DIR,
    'flag-code.type.ts',
);

/**
 * Extract the content inside the root <svg> element.
 *
 * Also normalizes legacy xlink:href attributes to modern href
 * attributes to avoid namespace issues when the sprite is used
 * as an external SVG.
 */
function extractInner(svg) {
    return svg
        // Remove the opening <svg ...> element.
        .replace(/^\s*<svg[^>]*>/i, '')

        // Remove the closing </svg> element.
        .replace(/<\/svg>\s*$/i, '')

        // Convert legacy SVG xlink:href to modern href.
        .replace(/\bxlink:href\s*=/gi, 'href=')

        .trim();
}

function main() {
    const files = readdirSync(SOURCE_DIR)
        .filter((file) => file.endsWith('.svg'))
        .sort();

    if (files.length === 0) {
        throw new Error(
            `No SVGs found in ${SOURCE_DIR}. ` +
            'Check that "flag-icons" is properly installed.',
        );
    }

    const codes = [];
    const symbols = [];

    for (const file of files) {
        const code = file.replace(/\.svg$/, '');

        const sourcePath = join(
            SOURCE_DIR,
            file,
        );

        const raw = readFileSync(
            sourcePath,
            'utf-8',
        );

        const inner = extractInner(raw);

        codes.push(code);

        symbols.push(
            `<symbol id="flag-${code}" viewBox="0 0 640 480">${inner}</symbol>`,
        );
    }

    /**
     * Generate the SVG sprite.
     *
     * xmlns:xlink is kept for compatibility with SVG content
     * that may still contain xlink references.
     */
    const sprite =
        '<!-- ⚠️ AUTOMATICALLY GENERATED FILE — DO NOT EDIT MANUALLY.\n' +
        '     Source: node_modules/flag-icons (npm package)\n' +
        '     Regenerate with: npm run flags:generate -->\n' +
        '<svg xmlns="http://www.w3.org/2000/svg" ' +
        'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
        'style="display:none">\n' +
        symbols.join('\n') +
        '\n</svg>\n';

    mkdirSync(OUTPUT_DIR, {
        recursive: true,
    });

    writeFileSync(
        OUTPUT_SPRITE,
        sprite,
        'utf-8',
    );

    /**
     * Generate the LibFlagCode TypeScript union.
     */
    const union = codes
        .map((code) => `  | '${code}'`)
        .join('\n');

    /**
     * Generate the readonly flag codes array.
     */
    const flagCodes = codes
        .map((code) => `  '${code}'`)
        .join(',\n');

    const ts =
        '// ⚠️ AUTOMATICALLY GENERATED FILE — DO NOT EDIT MANUALLY.\n' +
        '// Source: node_modules/flag-icons\n' +
        '// Regenerate with: npm run flags:generate\n\n' +
        `export type LibFlagCode =\n${union};\n\n` +
        'export const LIB_FLAG_CODES: readonly LibFlagCode[] = [\n' +
        flagCodes +
        '\n] as const;\n';

    writeFileSync(
        OUTPUT_TS,
        ts,
        'utf-8',
    );

    console.log(`✓ ${codes.length} flags generated:`);
    console.log(`  - ${OUTPUT_SPRITE}`);
    console.log(`  - ${OUTPUT_TS}`);
}

main();