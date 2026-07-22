import { Component, inject, input } from '@angular/core';
import { FlagSpriteService } from './flag-sprite.service';
import { LibFlagCode } from './flag-code.type';


@Component({
  selector: 'lib-flag',
  template: `
    <svg [attr.aria-label]="label()" [attr.role]="label() ? 'img' : null" [attr.aria-hidden]="!label()">
      <use [attr.href]="'#flag-' + code()"></use>
    </svg>
  `,
  host: {
    class: 'lib-flag',
    '[class]': '"lib-flag--" + size()',
  },

})
export class Flag {
  private readonly sprite = inject(FlagSpriteService);

  readonly code = input.required<LibFlagCode>();
  readonly size = input<LibFlagSize>('md');
  readonly label = input<string>();

  constructor() {
    this.sprite.ensureInjected();
  }
}

export type LibFlagSize = 'sm' | 'md' | 'lg';
