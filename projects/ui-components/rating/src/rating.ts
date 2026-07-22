import {
  Component,
  computed,
  input,
} from '@angular/core';

import { LibFormBaseControl } from '@ds-design-system/ui-components/form-core';

import {
  LIB_RATING_DEFAULT_EMOJIS,
  LibRatingEmoji,
  LibRatingMode,
} from './rating.types';

@Component({
  selector: 'lib-rating',
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
  host: {
    class: 'lib-rating',
    '[class.lib-rating--disabled]': 'disabled()',
    '[class.lib-rating--readonly]': 'readonly()',
    '[attr.aria-disabled]': 'disabled()',
  },
})
export class Rating extends LibFormBaseControl<number | string> {

  readonly mode = input<LibRatingMode>('stars');

  readonly max = input(5);

  readonly step = input<0.5 | 1>(0.5);

  readonly emojis = input<readonly LibRatingEmoji[]>(
    LIB_RATING_DEFAULT_EMOJIS,
  );

  protected readonly starValues = computed(() =>
    Array.from(
      {
        length: Math.max(1, this.max()),
      },
      (_, index) => index + 1,
    ),
  );

  protected readonly currentStarValue = computed(() => {
    const currentValue = this.value();

    if (typeof currentValue !== 'number' || Number.isNaN(currentValue)) {
      return 0;
    }

    return this.clampAndRoundValue(currentValue);
  });

  protected readonly currentEmojiValue = computed(() => {
    const currentValue = this.value();

    return typeof currentValue === 'string'
      ? currentValue
      : '';
  });

  protected isStarFull(star: number): boolean {
    return this.currentStarValue() >= star;
  }

  protected isStarHalf(star: number): boolean {
    const value = this.currentStarValue();

    return (
      this.step() === 0.5 &&
      value >= star - 0.5 &&
      value < star
    );
  }

  protected isStarEmpty(star: number): boolean {
    return !this.isStarFull(star) && !this.isStarHalf(star);
  }

  protected readonly currentRatingText = computed(() => {
    const value = this.currentStarValue();

    if (value === 0) {
      return `Aucune évaluation sur ${this.max()}`;
    }

    return `${this.formatRatingValue(value)} sur ${this.max()}`;
  });

  protected getStarAriaLabel(star: number): string {
    return `${star} sur ${this.max()}`;
  }

  protected formatRatingValue(value: number): string {
    return Number.isInteger(value)
      ? `${value}`
      : value.toFixed(1);
  }

  protected selectStarFromClick(
    event: MouseEvent,
    star: number,
  ): void {
    if (this.disabled() || this.readonly()) {
      return;
    }

    if (this.step() === 1) {
      this.selectStar(star);
      return;
    }

    const target = event.currentTarget;

    if (!(target instanceof HTMLElement)) {
      this.selectStar(star);
      return;
    }

    const rect = target.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const isLeftHalf = clickPosition < rect.width / 2;

    const selectedValue = isLeftHalf
      ? star - 0.5
      : star;

    this.selectStar(selectedValue);
  }

  protected selectStar(value: number): void {
    if (this.disabled() || this.readonly()) {
      return;
    }

    this.value.set(
      this.clampAndRoundValue(value),
    );
  }

  protected selectEmoji(value: string): void {
    if (this.disabled() || this.readonly()) {
      return;
    }

    this.value.set(value);
  }

  protected handleStarKeydown(
    event: KeyboardEvent,
  ): void {
    if (this.disabled() || this.readonly()) {
      return;
    }

    const currentValue = this.currentStarValue();
    const step = this.step();

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();

        this.selectStar(
          Math.min(
            this.max(),
            currentValue + step,
          ),
        );

        break;

      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();

        this.selectStar(
          Math.max(
            0,
            currentValue - step,
          ),
        );

        break;

      case 'Home':
        event.preventDefault();
        this.selectStar(0);
        break;

      case 'End':
        event.preventDefault();
        this.selectStar(this.max());
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        break;

      default:
        break;
    }
  }

  protected handleEmojiKeydown(
    event: KeyboardEvent,
    value: string,
  ): void {
    if (this.disabled() || this.readonly()) {
      return;
    }

    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault();
      this.selectEmoji(value);
    }
  }

  protected isEmojiSelected(value: string): boolean {
    return value === this.currentEmojiValue();
  }

  private clampAndRoundValue(value: number): number {
    const max = Math.max(1, this.max());
    const step = this.step();

    const clampedValue = Math.min(
      Math.max(value, 0),
      max,
    );

    const roundedValue =
      Math.round(clampedValue / step) * step;

    return Number(
      Math.min(roundedValue, max).toFixed(2),
    );
  }
}