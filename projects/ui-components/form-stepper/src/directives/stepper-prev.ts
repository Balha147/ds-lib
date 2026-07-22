import { computed, Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { LibStepperStore } from '../stepper.store';

/**
 * Jump to the previous step on click event.
 */

@Directive({
  selector: '[libFormStepperPrev]',
  host: {
    class: 'lib-form-stepper-prev',
    '[class.lib-form-stepper-prev--disabled]': 'isDisabled()',
    '(click)': 'onClick($event)'
  }
})
export class StepperPrev {
  private readonly store = inject(LibStepperStore);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  /**
   * CSS class to add when the anchor should be marked as inactive.
   */
  readonly inactiveClass = input<string>('', { alias: 'libFormStepperInactive' });

  readonly isDisabled = computed(() =>
    !this.store.state().hasPrevStep
  );

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

  onClick(event: Event): void {
    event.preventDefault();
    if (this.isDisabled())
      return;
    this.store.previous();
  }
}
