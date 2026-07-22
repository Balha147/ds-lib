import { booleanAttribute, Component, input, model, output } from '@angular/core';
import { LibAlertType } from './alert.type';
import { Icon, LibIconName } from '@ds-design-system/ui-components/icon';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.html',
  imports: [Icon]
})
export class Alert {
  type = input<LibAlertType>('light');
  icon = input<LibIconName>();
  visible = model<boolean>(true);
  dismissible = input(false, { transform: booleanAttribute });
  closed = output<void>();

  onClose(): void {
    this.visible.set(false);
    this.closed.emit();
  }
}
