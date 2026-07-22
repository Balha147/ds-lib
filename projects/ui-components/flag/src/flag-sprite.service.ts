import {
    DOCUMENT,
    Service,
    inject,
    isDevMode,
} from '@angular/core';

const SPRITE_CONTAINER_ID = 'lib-flag-sprite';

const SPRITE_PATH = 'assets/flags/flags-sprite.svg';

@Service()
export class FlagSpriteService {
    private readonly document = inject(DOCUMENT);

    private status: boolean | undefined;

    ensureInjected(): void {
        if (
            this.status === true ||
            this.document.getElementById(SPRITE_CONTAINER_ID)
        ) {
            this.status = true;
            return;
        }

        if (this.status === false) {
            return;
        }

        const spriteUrl = new URL(
            SPRITE_PATH,
            this.document.baseURI,
        ).href;

        fetch(spriteUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `HTTP ${response.status} ${response.statusText}`,
                    );
                }

                return response.text();
            })
            .then((svgText) => {
                this.injectSprite(svgText);

                this.status = true;
            })
            .catch((error) => {
                this.status = false;

                if (isDevMode()) {
                    console.error(
                        `[lib-flag] Impossible de charger le sprite de drapeaux ` +
                        `depuis "${spriteUrl}".`,
                        error,
                    );
                }
            });
    }

    private injectSprite(svgText: string): void {
        if (
            this.document.getElementById(
                SPRITE_CONTAINER_ID,
            )
        ) {
            return;
        }

        const parser = new DOMParser();

        const parsed = parser.parseFromString(
            svgText,
            'image/svg+xml',
        );

        const svg = parsed.documentElement;

        if (
            svg.nodeName.toLowerCase() !== 'svg'
        ) {
            throw new Error(
                'Invalid flag sprite: root element is not <svg>.',
            );
        }

        const container =
            this.document.createElement('div');

        container.id = SPRITE_CONTAINER_ID;

        container.style.position = 'absolute';
        container.style.width = '0';
        container.style.height = '0';
        container.style.overflow = 'hidden';

        const importedSvg =
            this.document.importNode(svg, true);

        container.appendChild(importedSvg);

        this.document.body.prepend(container);
    }
}