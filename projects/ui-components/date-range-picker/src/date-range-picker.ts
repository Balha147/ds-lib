import {
  Component,
  ElementRef,
  ViewEncapsulation,
  input,
  viewChild,
} from '@angular/core';
import { compareAsc } from 'date-fns';
import { fr } from 'date-fns/locale';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepickerModule, MatDateRangePicker } from '@angular/material/datepicker';
import { DateFnsAdapter, MAT_DATE_FNS_FORMATS } from '@angular/material-date-fns-adapter';
import { Icon } from '@ds-design-system/ui-components/icon';
import { LibFormBaseControl } from '@ds-design-system/ui-components/form-core';
import {
  LibFormDateRangePicker,
  LibFormDateRangePickerPlaceholders,
} from './date-range-picker.types';
import { FlexibleDateInput } from '@ds-design-system/ui-components/shared';

@Component({
  selector: 'lib-form-date-range-picker',
  templateUrl: './date-range-picker.html',
  styleUrl: './date-range-picker.scss',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'lib-form-container' },
  imports: [MatDatepickerModule, Icon, FlexibleDateInput],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: fr },
    { provide: DateAdapter, useClass: DateFnsAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FNS_FORMATS },
  ],
})
export class DatepickerRange extends LibFormBaseControl<LibFormDateRangePicker> {
  readonly placeholders = input<LibFormDateRangePickerPlaceholders>({ start: '', end: '' });

  private readonly startInputRef = viewChild<ElementRef<HTMLInputElement>>('startInput');

  protected onDateChange(milestone: keyof LibFormDateRangePicker, date: Date | null): void {
    const next = { ...this.value(), [milestone]: date } as LibFormDateRangePicker;

    if (next.start && next.end && compareAsc(next.start, next.end) === 1) {
      next.end = null;
    }

    this.value.set(next);
  }

  protected openPicker(picker: MatDateRangePicker<Date>): void {
    if (this.readonly() || this.disabled()) return;
    picker.open();
  }

  override focus(): void {
    this.startInputRef()?.nativeElement.focus();
  }
}