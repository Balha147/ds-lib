
import {
  Component,
  computed,
  input,
  signal,
} from '@angular/core';

import {
  LibCarouselItem,
  LibCarouselSize,
  LibCarouselTransition,
} from './carousel.types';

@Component({
  selector: 'lib-carousel',
  templateUrl: './carousel.html',
})
export class Carousel {
  readonly items = input<LibCarouselItem[]>([]);
  readonly size = input<LibCarouselSize>('md');
  readonly transition = input<LibCarouselTransition>('slide');
  readonly autoplay = input(false);
  readonly interval = input(5000);
  readonly showControls = input(true);
  readonly showIndicators = input(true);
  readonly showCounter = input(true);
  readonly loop = input(true);
  readonly ariaLabel = input('Galerie');
  protected readonly currentIndex = signal(0);

  protected readonly hasMultipleSlides = computed(
    () => this.items().length > 1,
  );

  protected readonly currentItem = computed(
    () => this.items()[this.currentIndex()],
  );

  protected readonly slideCount = computed(
    () => this.items().length,
  );

  protected readonly canGoPrevious = computed(() => {
    if (this.loop()) {
      return this.hasMultipleSlides();
    }

    return this.currentIndex() > 0;
  });

  protected readonly canGoNext = computed(() => {
    if (this.loop()) {
      return this.hasMultipleSlides();
    }

    return this.currentIndex() < this.slideCount() - 1;
  });

  protected readonly carouselClasses = computed(() => [
    'lib-carousel',
    `lib-carousel--${this.size()}`,
    `lib-carousel--${this.transition()}`,
  ]);

  protected previous(): void {
    if (!this.canGoPrevious()) {
      return;
    }

    const count = this.slideCount();

    if (this.currentIndex() === 0) {
      this.currentIndex.set(count - 1);
      return;
    }

    this.currentIndex.update((index) => index - 1);
  }

  protected next(): void {
    if (!this.canGoNext()) {
      return;
    }

    const lastIndex = this.slideCount() - 1;

    if (this.currentIndex() === lastIndex) {
      this.currentIndex.set(0);
      return;
    }

    this.currentIndex.update((index) => index + 1);
  }

  protected goTo(index: number): void {
    if (index < 0 || index >= this.slideCount()) {
      return;
    }

    this.currentIndex.set(index);
  }

  protected onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.previous();
        break;

      case 'ArrowRight':
        event.preventDefault();
        this.next();
        break;

      case 'Home':
        event.preventDefault();
        this.goTo(0);
        break;

      case 'End':
        event.preventDefault();
        this.goTo(this.slideCount() - 1);
        break;
    }
  }
}

