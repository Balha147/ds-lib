import { fr } from 'date-fns/locale';
import { Component, computed, ElementRef, signal, viewChild, ViewEncapsulation } from '@angular/core';
import { DateFnsAdapter, MAT_DATE_FNS_FORMATS } from '@angular/material-date-fns-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { LibFormBaseControl } from '@ds-design-system/ui-components/form-core';
import { Icon } from '@ds-design-system/ui-components/icon';
import { ValidationError } from '@angular/forms/signals';
import { DateParseError, FlexibleDateInput } from '@ds-design-system/ui-components/shared';

@Component({
  selector: 'lib-form-datepicker',
  templateUrl: './datepicker.html',
  host: { 'class': 'lib-form-container' },
  styles: ['lib-form-date-picker { display: block; }'],
  encapsulation: ViewEncapsulation.None,
  imports: [MatDatepickerModule, Icon, FlexibleDateInput],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: fr,
    },
    {
      provide: DateAdapter,
      useClass: DateFnsAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_DATE_FNS_FORMATS,
    },
  ]
})
export class Datepicker extends LibFormBaseControl<Date> {
  private readonly controlRef = viewChild<ElementRef<HTMLInputElement>>('control');
  protected readonly picker = viewChild.required(MatDatepicker<Date>);
  protected readonly parseError = signal<ValidationError | null>(null);

  override readonly isInvalid = computed(() =>
    this.touched() && (this.invalid() || this.errors().length > 0 || this.parseError() !== null)
  );

  override readonly firstErrorMessage = computed<string>(() => {
    const localErr = this.parseError();
    if (localErr) return this.messageFor(localErr);

    const [first] = this.errors();
    return first ? this.messageFor(first) : '';
  });

  protected onNativeInput(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    if (!inputEl.value.trim()) {
      this.value.set(null);
    }
  }

  protected onParseError(error: DateParseError | null): void {
    if (error === 'INVALID_FORMAT') {
      this.parseError.set({ kind: 'invalidDateFormat', message: 'Format de date invalide' });
    } else {
      this.parseError.set(null);
    }
  }

  protected override messageFor(error: ValidationError): string {
    if (error.kind === 'invalidDateFormat') {
      return 'Date invalide (ex: 17/11/2026, demain, +3d)';
    }
    return super.messageFor(error);
  }

  protected onDateChange(date: Date | null): void {
    if (date) {
      this.value.set(date);
    }
  }

  protected openPicker(): void {
    if (this.readonly() || this.disabled()) return;
    this.picker().open();
  }

  override focus(): void {
    this.controlRef()?.nativeElement.focus();
  }
}
