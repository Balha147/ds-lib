import {
  Component,
  booleanAttribute,
  computed,
  input,
  model,
  output,
} from '@angular/core';

import { Icon } from '@ds-design-system/ui-components/icon';
import { LibPaginatorPageEvent } from './paginator.types';

const ELLIPSIS = -1;

@Component({
  selector: 'lib-paginator',
  templateUrl: './paginator.html',
  imports: [Icon],
  host: {
    class: 'lib-paginator',
    role: 'navigation',
    '[attr.aria-label]': '"Pagination"',
  },
})
export class Paginator {
  readonly totalItems = input.required<number>();

  readonly pageSize = input(10);

  readonly currentPage = model(1);

  readonly disabled = input(false, {
    transform: booleanAttribute,
  });

  readonly showPageSizeSelector = input(false, {
    transform: booleanAttribute,
  });

  readonly pageSizeOptions = input<number[]>([10, 25, 50, 100]);

  readonly showRangeLabel = input(true, {
    transform: booleanAttribute,
  });

  readonly siblingCount = input(1);

  readonly pageChange = output<LibPaginatorPageEvent>();
  readonly pageSizeChange = output<number>();

  readonly totalPages = computed(() =>
    Math.max(
      1,
      Math.ceil(this.totalItems() / this.pageSize()),
    ),
  );

  readonly rangeStart = computed(() => {
    if (this.totalItems() === 0) {
      return 0;
    }

    return (this.currentPage() - 1) * this.pageSize() + 1;
  });

  readonly rangeEnd = computed(() =>
    Math.min(
      this.currentPage() * this.pageSize(),
      this.totalItems(),
    ),
  );

  readonly canGoPrevious = computed(() =>
    this.currentPage() > 1,
  );

  readonly canGoNext = computed(() =>
    this.currentPage() < this.totalPages(),
  );

  readonly visiblePages = computed<number[]>(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const siblings = this.siblingCount();

    const maxVisiblePages = 5 + siblings * 2;

    if (total <= maxVisiblePages) {
      return Array.from(
        { length: total },
        (_, index) => index + 1,
      );
    }

    const left = Math.max(
      current - siblings,
      2,
    );

    const right = Math.min(
      current + siblings,
      total - 1,
    );

    const pages: number[] = [1];

    if (left > 2) {
      pages.push(ELLIPSIS);
    }

    for (let page = left; page <= right; page++) {
      pages.push(page);
    }

    if (right < total - 1) {
      pages.push(ELLIPSIS);
    }

    pages.push(total);

    return pages;
  });

  protected readonly ellipsis = ELLIPSIS;

  protected goTo(newPage: number): void {
    if (
      this.disabled() ||
      newPage < 1 ||
      newPage > this.totalPages() ||
      newPage === this.currentPage()
    ) {
      return;
    }

    this.currentPage.set(newPage);

    this.emitPageChange();
  }

  protected onPageSizeChange(value: string): void {
    const size = Number(value);

    this.pageSizeChange.emit(size);

    this.currentPage.set(1);

    this.emitPageChange();
  }

  private emitPageChange(): void {
    this.pageChange.emit({
      page: this.currentPage(),
      pageSize: this.pageSize(),
      totalPages: this.totalPages(),
    });
  }
}