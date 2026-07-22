import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component, inject, OnInit } from '@angular/core';
import { moduleMetadata } from '@storybook/angular-vite';
import {
  LibLayoutComponent,
  LibLayoutMenuItemComponent,
  LibLayoutNavDirective,
  LibLayoutNavFooterDirective,
  LibLayoutSubnavDirective,
  LibLayoutFooterDirective,
  LibLayoutService,
} from '@ds-design-system/ui-components/layout';

@Component({
  selector: 'story-layout-demo',
  imports: [
    LibLayoutComponent,
    LibLayoutMenuItemComponent,
    LibLayoutNavDirective,
    LibLayoutNavFooterDirective,
    LibLayoutSubnavDirective,
    LibLayoutFooterDirective,
  ],
  template: `
    <lib-layout>
      <p>Contenu principal de la page.</p>

      <div libLayoutNav>
        <lib-layout-menu-item contentId="contentA" icon="compte">Content A</lib-layout-menu-item>
        <lib-layout-menu-item contentId="contentB" icon="avion">Content B</lib-layout-menu-item>
      </div>

      <div libLayoutNavFooter>NAV FOOTER</div>

      <div libLayoutSubnav>
        @switch (subnavContentId()) {
          @case ('contentA') { <h1>Content A</h1> }
          @case ('contentB') { <h1>Content B</h1> }
        }
      </div>

      <div libLayoutFooter>FOOTER</div>
    </lib-layout>
  `
})
class LayoutDemoHost implements OnInit {
  private readonly layoutService = inject(LibLayoutService);
  protected readonly subnavContentId = this.layoutService.subnavContentId;

  ngOnInit(): void {
    this.layoutService.setLogoConfig({ src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1280px-Angular_gradient_logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=thumbnail', alt: 'Logo' });
  }
}

const meta: Meta<LayoutDemoHost> = {
  title: 'Layout/Layout',
  component: LayoutDemoHost,
  decorators: [moduleMetadata({ imports: [LayoutDemoHost] })],
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj<LayoutDemoHost> = {};