import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  effect,
  input,
  viewChild,
} from '@angular/core';
import { Icon } from '@ds-design-system/ui-components/icon';
import { LibFormBaseControl } from '@ds-design-system/ui-components/form-core';
import { LibFormSelectItemDirective } from './select-item.directive';
import { LibFormSelectItem, LibFormSelectTemplatePosition, LibFormSelectValue } from './select.types';
import { LibFormAutocompleteDirective } from '@ds-design-system/ui-components/shared';
import { FuzzySearchStrategy, SearchStrategy } from '@ds-design-system/ui-components/ai-search';

@Component({
  selector: 'lib-form-select',
  templateUrl: './select.html',
  styleUrl: './select.scss',
  imports: [
    NgTemplateOutlet,
    OverlayModule,
    Icon,
    LibFormAutocompleteDirective,
  ],
  host: {
    class: 'lib-form-container lib-form-select',
  },
})
export class Select extends LibFormBaseControl<LibFormSelectValue> {
  readonly items = input<LibFormSelectItem[]>([]);

  readonly autocomplete = input(false, {
    transform: booleanAttribute,
  });

  readonly allowUncheck = input(true, {
    transform: booleanAttribute,
  });

  readonly templatePosition = input<LibFormSelectTemplatePosition>('before');

  readonly fuzzySearch = input(false, {
    transform: booleanAttribute,
  });

  readonly searchStrategy = input<SearchStrategy<LibFormSelectItem>>(
    new FuzzySearchStrategy<LibFormSelectItem>(),
  );

  readonly searchMaxDistance = input<number | undefined>(undefined);

  private readonly projectedItemDirectives = contentChildren(LibFormSelectItemDirective);

  protected readonly resolvedItems = computed<LibFormSelectItem[]>(() => {
    const projected = this.projectedItemDirectives();

    if (projected.length > 0) {
      return projected.map(dir => ({
        value: dir.value(),
        label: dir.label(),
        template: dir.template,
      }));
    }

    return this.items();
  });

  private readonly itemsMap = computed(() => {
    const map = new Map<string, LibFormSelectItem>();

    for (const item of this.resolvedItems()) {
      map.set(item.value, item);
    }

    return map;
  });

  protected readonly selectedItem = computed(() =>
    this.value()?.code ? this.itemsMap().get(this.value()!.code) : undefined,
  );

  protected readonly formAutocomplete = viewChild.required(LibFormAutocompleteDirective<LibFormSelectItem>);

  protected readonly overlayOrigin = viewChild.required(CdkOverlayOrigin);

  private readonly fuzzyMatchingKeys = computed<Set<string> | null>(() => {
    if (!this.fuzzySearch()) {
      return null;
    }

    const query = this.formAutocomplete().inputValue();
    if (!query) {
      return null;
    }

    const results = this.searchStrategy().search(
      query,
      this.resolvedItems(),
      { maxDistance: this.searchMaxDistance() },
    );

    return new Set(results.map(res => res.item.value));
  });

  protected readonly formAutocompleteFilter = (
    inputValue: string | undefined,
    item: LibFormSelectItem,
  ): boolean => {
    if (!inputValue) {
      return true;
    }

    if (!this.fuzzySearch()) {
      return this.normalizeLabel(item.label).includes(
        this.normalizeLabel(inputValue),
      );
    }

    const matchedKeys = this.fuzzyMatchingKeys();
    return matchedKeys ? matchedKeys.has(item.value) : true;
  };

  constructor() {
    super();
    let wasOpen = false;
    effect(() => {
      const isOpen = this.formAutocomplete().shouldShowSuggestions();
      if (wasOpen && !isOpen) {
        this.onBlur();
      }

      wasOpen = isOpen;
    });
  }

  protected trackByValue(_index: number, item: LibFormSelectItem): string {
    return item.value;
  }

  protected onSuggestionClicked(item: LibFormSelectItem): void {
    const isUnchanged = item.value === this.value()?.code;

    if (isUnchanged && !this.allowUncheck()) {
      return;
    }

    if (isUnchanged && this.allowUncheck()) {
      this.value.set(null);
      return;
    }

    this.value.set({
      code: item.value,
      label: item.label,
    });
  }

  private normalizeLabel(label: string): string {
    return label
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toLocaleLowerCase();
  }
}
