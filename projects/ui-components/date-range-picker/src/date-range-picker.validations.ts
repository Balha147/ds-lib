import { ValidationError } from '@angular/forms/signals';
import { LibFormDateRangePicker, LibFormDateRangePickerErrorDetail } from './date-range-picker.types';

export const LIB_FORM_DATE_RANGE_PICKER_ERROR_KIND = 'dateRange';

export function libFormDateRangePickerValidator(required = false) {
    return (ctx: { value(): LibFormDateRangePicker }): ValidationError | null => {
        const val = ctx.value();
        const hasNoValue = !val || (!val.start && !val.end);

        if (hasNoValue) {
            return required ? ({ kind: 'required' } as ValidationError) : null;
        }
        if (!val.start) return buildError('start');
        if (!val.end) return buildError('end');
        return null;
    };
}

function buildError(detail: LibFormDateRangePickerErrorDetail): ValidationError {
    const message =
        detail === 'start'
            ? 'La date de début doit également être renseignée.'
            : 'La date de fin doit également être renseignée.';
    return { kind: LIB_FORM_DATE_RANGE_PICKER_ERROR_KIND, message } as ValidationError;
}