import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";
import { Component, effect, input, signal, TemplateRef, viewChild } from "@angular/core";
import { LibIconName } from "@ds-design-system/ui-components/icon";

@Component({
    selector: 'lib-tab',
    templateUrl: './tab.html',
    styleUrls: ['./tab.scss']
})
export class Tab {
    readonly label = input.required<string>();

    readonly icon = input<LibIconName>();

    readonly disabled = input(false, {
        transform: (value: BooleanInput) => coerceBooleanProperty(value),
    });

    readonly templateRef =
        viewChild.required<TemplateRef<void>>('templateRef');
}