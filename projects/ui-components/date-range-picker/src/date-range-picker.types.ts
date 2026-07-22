export interface LibFormDateRangePicker {
    start: Date | null;
    end: Date | null;
}

export interface LibFormDateRangePickerPlaceholders {
    start: string;
    end: string;
}

export type LibFormDateRangePickerErrorDetail = 'start' | 'end';