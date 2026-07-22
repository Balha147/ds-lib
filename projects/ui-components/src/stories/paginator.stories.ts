import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { moduleMetadata } from '@storybook/angular-vite';
import { Paginator, LibPaginatorPageEvent } from '@ds-design-system/ui-components/paginator';

const meta: Meta<Paginator> = {
    title: 'Components/Paginator',
    component: Paginator,
    tags: ['autodocs'],
    argTypes: {
        totalItems: { control: 'number' },
        pageSize: { control: 'number' },
        disabled: { control: 'boolean' },
        showPageSizeSelector: { control: 'boolean' },
        showRangeLabel: { control: 'boolean' },
        siblingCount: { control: 'number' },
    },
};
export default meta;
type Story = StoryObj<Paginator>;

/* -------------------------------------------------------------------------- */
/* Playground                                                                  */
/* -------------------------------------------------------------------------- */

export const Playground: Story = {
    args: {
        totalItems: 234,
        pageSize: 10,
        page: 3,
        showRangeLabel: true,
        showPageSizeSelector: false,
    },
};

/* -------------------------------------------------------------------------- */
/* Interactif — two-way binding [(page)]                                     */
/* -------------------------------------------------------------------------- */

@Component({
    selector: 'story-paginator-interactive',
    imports: [Paginator, JsonPipe],
    template: `
    <div style="display:flex; flex-direction:column; gap:16px; max-width:600px; padding:2rem;">
      <lib-paginator
        [(page)]="currentPage"
        [totalItems]="234"
        [pageSize]="10"
        [showPageSizeSelector]="true"
        (pageChange)="onPageChange($event)">
      </lib-paginator>

      <pre style="background:#f8f9fa; padding:12px; border-radius:6px; font-family:monospace; font-size:13px;">{{ { currentPage: currentPage(), lastEvent } | json }}</pre>
    </div>
  `
})
class PaginatorInteractiveHost {
    readonly currentPage = signal(1);
    lastEvent: LibPaginatorPageEvent | null = null;

    onPageChange(event: LibPaginatorPageEvent): void {
        this.lastEvent = event;
    }
}

export const Interactive: Story = {
    render: () => ({ template: `<story-paginator-interactive></story-paginator-interactive>` }),
    decorators: [moduleMetadata({ imports: [PaginatorInteractiveHost] })],
    parameters: {
        docs: {
            description: {
                story: 'Navigue entre les pages : `[(page)]` se met à jour, `(pageChange)` émet un événement complet à chaque changement.'
            }
        }
    }
};

/* -------------------------------------------------------------------------- */
/* Beaucoup de pages — ellipses                                              */
/* -------------------------------------------------------------------------- */

export const ManyPages: Story = {
    args: {
        totalItems: 4820,
        pageSize: 20,
        page: 47,
        showRangeLabel: true,
    },
    parameters: {
        docs: {
            description: { story: 'Avec beaucoup de pages, des ellipses (…) remplacent les numéros intermédiaires non pertinents.' }
        }
    }
};

/* -------------------------------------------------------------------------- */
/* Peu de pages — pas d'ellipse                                              */
/* -------------------------------------------------------------------------- */

export const FewPages: Story = {
    args: {
        totalItems: 35,
        pageSize: 10,
        page: 2,
    },
};

/* -------------------------------------------------------------------------- */
/* Sélecteur de taille de page                                               */
/* -------------------------------------------------------------------------- */

export const WithPageSizeSelector: Story = {
    args: {
        totalItems: 500,
        pageSize: 25,
        page: 1,
        showPageSizeSelector: true,
        pageSizeOptions: [10, 25, 50, 100],
    },
};

/* -------------------------------------------------------------------------- */
/* siblingCount élargi                                                        */
/* -------------------------------------------------------------------------- */

export const WideSiblingRange: Story = {
    args: {
        totalItems: 1000,
        pageSize: 10,
        page: 50,
        siblingCount: 3,
    },
    parameters: {
        docs: {
            description: { story: '`siblingCount: 3` affiche plus de pages autour de la page courante.' }
        }
    }
};

/* -------------------------------------------------------------------------- */
/* Désactivé                                                                   */
/* -------------------------------------------------------------------------- */

export const Disabled: Story = {
    args: {
        totalItems: 234,
        pageSize: 10,
        page: 3,
        disabled: true,
    },
};

/* -------------------------------------------------------------------------- */
/* Une seule page — navigation masquée naturellement (tout désactivé)        */
/* -------------------------------------------------------------------------- */

export const SinglePage: Story = {
    args: {
        totalItems: 8,
        pageSize: 10,
        page: 1,
    },
};