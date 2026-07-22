import { Directive, ElementRef, HostListener, inject, input, output } from '@angular/core';
import { parse, format, isValid, addDays, addMonths, addYears, subDays, subMonths, subYears } from 'date-fns';
import { fr } from 'date-fns/locale';

export type DateParseError = 'INVALID_FORMAT' | 'OUT_OF_RANGE';

@Directive({
  selector: '[libFlexibleDateInput]',
})
export class FlexibleDateInput {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  readonly outputFormat = input<string>('dd/MM/yyyy');

  readonly dateParsed = output<Date>();
  readonly parseError = output<DateParseError | null>();

  private readonly supportedPatterns = [
    'dd/MM/yyyy',
    'd/M/yyyy',
    'd MMMM yyyy',
    'dd MMMM yyyy',
    'd MMM yyyy',
    'dd MMM yyyy',
    'yyyy-MM-dd',
  ];

  @HostListener('change')
  @HostListener('blur')
  onInputChange(): void {
    const rawValue = this.el.nativeElement.value.trim();

    if (!rawValue) {
      this.parseError.emit(null);
      this.dateParsed.emit(null as unknown as Date);
      return;
    }

    const parsedDate = this.parseInput(rawValue);

    if (parsedDate && isValid(parsedDate)) {
      const formattedValue = format(parsedDate, this.outputFormat());
      this.el.nativeElement.value = formattedValue;

      this.parseError.emit(null);
      this.dateParsed.emit(parsedDate);
    } else {
      this.parseError.emit('INVALID_FORMAT');
    }
  }

  private parseInput(value: string): Date | null {
    const normalized = value.toLowerCase().trim();
    const relativeDate = this.parseRelativeShortcut(normalized);
    if (relativeDate) {
      return relativeDate;
    }
    return this.parseStandardPatterns(normalized);
  }

  private parseRelativeShortcut(value: string): Date | null {
    const today = new Date();

    if (['today', "aujourd'hui", 'hui', 'td'].includes(value)) {
      return today;
    }
    if (['tomorrow', 'demain', 'tm'].includes(value)) {
      return addDays(today, 1);
    }
    if (['yesterday', 'hier'].includes(value)) {
      return subDays(today, 1);
    }

    const offsetRegex = /^([+-]?\d+)\s*([dmy])?$/i;
    const match = value.match(offsetRegex);

    if (match) {
      const amount = parseInt(match[1], 10);
      const unit = (match[2] || 'd').toLowerCase();

      switch (unit) {
        case 'd':
          return amount >= 0 ? addDays(today, amount) : subDays(today, Math.abs(amount));
        case 'm':
          return amount >= 0 ? addMonths(today, amount) : subMonths(today, Math.abs(amount));
        case 'y':
          return amount >= 0 ? addYears(today, amount) : subYears(today, Math.abs(amount));
      }
    }

    return null;
  }

  private parseStandardPatterns(value: string): Date | null {
    const cleanValue = value.replace(/,/g, '');

    for (const pattern of this.supportedPatterns) {
      const parsed = parse(cleanValue, pattern, new Date(), { locale: fr });
      if (isValid(parsed)) {
        return parsed;
      }
    }
    return null;
  }
}
