import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, computed, contentChildren, effect, input, model } from '@angular/core';
import { LibTabGroupPosition, LibTabGroupBreakpoint } from './tab-group.types';
import { Tab } from './tab/tab';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'lib-tab-group',
  templateUrl: './tabs-group.html',
  imports: [NgClass, NgTemplateOutlet]
})
export class TabsGroup {
  readonly tabs = contentChildren(Tab);

  readonly position = input<LibTabGroupPosition>('start');

  readonly breakpoint = input<LibTabGroupBreakpoint>();

  readonly classic = input(false, {
    transform: (value: BooleanInput) => coerceBooleanProperty(value),
  });

  readonly activeIndex = model<number>();

  readonly activeTab = computed(() => {
    const tabs = this.tabs();
    const index = this.activeIndex();
    if (
      index === undefined ||
      index < 0 ||
      index >= tabs.length
    ) {
      return undefined;
    }
    return tabs[index];
  });

  readonly activeTemplate = computed(() =>
    this.activeTab()?.templateRef()
  );

  readonly firstEnabledTab = computed(() =>
    this.tabs().find(tab => !tab.disabled())
  );

  constructor() {
    effect(() => {
      const tabs = this.tabs();
      tabs.forEach(tab => {
        tab.label();
        tab.icon();
        tab.disabled();
      });

      const selected = this.activeTab();
      if (!selected || selected.disabled()) {
        const first = this.firstEnabledTab();
        if (first) {
          this.activeIndex.set(
            tabs.indexOf(first)
          );
        }
      }
    });
  }

  selectTab(tab: Tab): void {
    if (tab.disabled()) {
      return;
    }
    const index = this.tabs().indexOf(tab);
    if (index !== this.activeIndex()) {
      this.activeIndex.set(index);
    }
  }
}
