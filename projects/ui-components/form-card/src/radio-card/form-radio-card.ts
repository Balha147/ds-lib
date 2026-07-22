import { Component, booleanAttribute, input } from '@angular/core';
import { LibFormCard } from '../shared/form-card-base';
import { LibFormCardComplexValue, LibFormCardItem, LibFormCardType, LibFormCardValue } from '../shared/form-card.types';
import { Icon } from '@ds-design-system/ui-components/icon';
import { TooltipDirective, Tooltip } from '@ds-design-system/ui-components/tooltip';

@Component({
    selector: 'lib-form-radio-card',
    templateUrl: '../shared/form-card-base.html',
    styleUrl: '../shared/form-card-base.scss',
    imports: [Icon, TooltipDirective, Tooltip],
    host: {
        class: 'lib-form-card-group'
    }
})
export class LibFormRadioCard extends LibFormCard<LibFormCardComplexValue | null> {
    readonly allowUncheck = input(true, { transform: booleanAttribute });

    protected override type: LibFormCardType = 'radio';

    protected override isChecked(itemValue: LibFormCardValue): boolean {
        return this.extractPrimitiveValue(this.value()) === itemValue;
    }

    protected override onInputClick(item: LibFormCardItem, _checked: boolean): void {
        const currentPrimitive = this.extractPrimitiveValue(this.value());
        const isUnchanged = item.value === currentPrimitive;

        if (isUnchanged && !this.allowUncheck()) {
            return;
        }

        if (isUnchanged) {
            this.value.set(null);
        } else {
            this.value.set({ label: item.label, value: item.value });
        }
    }
}