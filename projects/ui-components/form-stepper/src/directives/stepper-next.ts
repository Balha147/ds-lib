import { computed, Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { LibStepperStore } from '../stepper.store';

/**
 * Jump to the next step on click event.
 */

@Directive({
  selector: '[libFormStepperNext]',
  host: {
    '[attr.disabled]': 'isDisabled() ? true : null',
    '(click)': 'onClick()'
  }
})
export class StepperNext {
  private readonly store = inject(LibStepperStore);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  readonly inactiveClass = input<string>('', { alias: 'libFormStepperInactive' });

  readonly isDisabled = computed(() => {
    const state = this.store.state();
    return !state.hasNextStep || !state.isStepValid;
  });

  constructor() {
    effect(() => {
      const cls = this.inactiveClass();
      if (!cls)
        return;

      if (this.isDisabled()) {
        this.renderer.addClass(this.elementRef.nativeElement, cls);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, cls);
      }
    });
  }

  onClick(): void {
    if (this.isDisabled())
      return;
    this.store.next();
  }
}
