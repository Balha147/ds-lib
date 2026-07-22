import { Component } from '@angular/core';
import { LibFormCard } from '../shared/form-card-base';
import { LibFormCardComplexValue, LibFormCardItem, LibFormCardType, LibFormCardValue } from '../shared/form-card.types';
import { Icon } from '@ds-design-system/ui-components/icon';
import { TooltipDirective, Tooltip } from '@ds-design-system/ui-components/tooltip';

@Component({
    selector: 'lib-form-checkbox-card',
    templateUrl: '../shared/form-card-base.html',
    styleUrl: '../shared/form-card-base.scss',
    imports: [Icon, TooltipDirective, Tooltip],
    host: {
        class: 'lib-form-card-group'
    }
})
export class LibFormCheckboxCard extends LibFormCard<LibFormCardComplexValue[]> {
    protected override type: LibFormCardType = 'checkbox';

    protected override isChecked(itemValue: LibFormCardValue): boolean {
        const current = this.value();
        if (!Array.isArray(current)) {
            return false;
        }
        return current.some((value: LibFormCardComplexValue) => this.extractPrimitiveValue(value) === itemValue);
    }

    protected override onInputClick(item: LibFormCardItem, checked: boolean): void {
        const current = this.value() ?? [];

        if (checked) {
            const newItem: LibFormCardComplexValue = { label: item.label, value: item.value };
            this.value.set([...current, newItem]);
        } else {
            const next = current.filter((value: LibFormCardComplexValue) => this.extractPrimitiveValue(value) !== item.value);
            this.value.set(next);
        }
    }
}