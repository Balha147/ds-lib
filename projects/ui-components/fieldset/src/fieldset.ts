import {
  Component,
  input,
} from '@angular/core';

@Component({
  selector: 'lib-fieldset',
  templateUrl: './fieldset.html',
  host: {
    class: 'lib-fieldset',
    '[class.lib-fieldset--disabled]': 'disabled()',
  },
})
export class Fieldset {
  readonly legend = input<string>('');
  readonly description = input<string>('');
  readonly variant = input<'default' | 'subtle' | 'outlined'>('default');
  readonly disabled = input(false);
}