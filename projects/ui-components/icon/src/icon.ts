import { Component, input } from '@angular/core';
import { LibIconName } from './icon.type';

export type LibIconSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'lib-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  host: {
    class: 'lib-icon',
    '[class]': '"lib-icon--" + size()'
  }
})
export class Icon {
  readonly name = input.required<LibIconName>();
  readonly size = input<LibIconSize>('md');
  readonly label = input<string>();
}