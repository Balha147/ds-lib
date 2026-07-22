import { booleanAttribute, Component, computed, input } from '@angular/core';
import { Icon } from '@ds-design-system/ui-components/icon';
import { LibSpinnerSize } from './spinner.type';

@Component({
  selector: 'lib-spinner',
  templateUrl: './spinner.html',
  imports: [Icon],
  host: {
    class: 'lib-spinner',

    '[class.lib-spinner--centered]': 'isCentered()',
    '[class.lib-spinner--full-screen]': 'fullScreen()',

    '[class.lib-fs-6]': 'currentSize() === "lg"',
    '[class.lib-fs-7]': 'currentSize() === "md"',
    '[class.lib-fs-8]': 'currentSize() === "sm"',
  },
})
export class Spinner {
  readonly centered = input(false, {
    transform: booleanAttribute,
  });

  readonly fullScreen = input(false, {
    transform: booleanAttribute,
  });

  readonly size = input<LibSpinnerSize>();

  protected readonly isCentered = computed(
    () => this.centered() || this.fullScreen()
  );

  protected readonly currentSize = computed<LibSpinnerSize>(
    () =>
      this.size() ??
      (this.fullScreen() ? 'lg' : 'sm')
  );
}
