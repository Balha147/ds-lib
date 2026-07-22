export interface LibProgressBar {
    width?: number;
    type?: LibProgressType;
    ariaLabel?: string;
}

export type LibProgressType =
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';