export interface LibLayoutStateSnapshot {
    isNavLess: boolean;
    isNavOpened: boolean;
    isSubnavOpened: boolean;
    subnavContentId: string | null;
}

export interface LibLayoutLogoConfig {
    src: string;
    alt: string;
    compactOnDesktop?: boolean;
}