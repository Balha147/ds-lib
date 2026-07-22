import { Component, input, TemplateRef } from '@angular/core';
import { LibFormBaseControl } from '@ds-design-system/ui-components/form-core';
import { LibFormCardComplexValue, LibFormCardItem, LibFormCardType, LibFormCardValue } from './form-card.types';
import { Icon } from '@ds-design-system/ui-components/icon';
import { TooltipDirective, Tooltip } from '@ds-design-system/ui-components/tooltip';

@Component({
    selector: 'lib-form-card',
    templateUrl: './form-card-base.html',
    styleUrl: './form-card-base.scss',
    imports: [Icon, TooltipDirective, Tooltip],
    host: {
        class: 'lib-form-card-group'
    }
})
export abstract class LibFormCard<T> extends LibFormBaseControl<T> {
    readonly items = input<LibFormCardItem[]>([]);

    protected trackByValue(_index: number, item: LibFormCardItem): LibFormCardValue {
        return item.value;
    }

    protected isTemplateRef(value: string | TemplateRef<void>): value is TemplateRef<void> {
        return value instanceof TemplateRef;
    }

    protected extractPrimitiveValue(val: LibFormCardComplexValue | null | undefined): LibFormCardValue | null {
        if (val === null || val === undefined) {
            return null;
        }
        if (typeof val === 'object' && 'value' in val) {
            return val.value;
        }
        return val as LibFormCardValue;
    }

    protected abstract type: LibFormCardType;

    protected abstract isChecked(value: LibFormCardValue): boolean;

    protected abstract onInputClick(item: LibFormCardItem, checked: boolean): void;
}