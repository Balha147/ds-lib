import { ActivatedRouteSnapshot } from '@angular/router';
import { LIB_LAYOUT_NAVLESS } from './layout.config';

export const hasNavlessInRoutesData = (routes: ActivatedRouteSnapshot[]): boolean =>
    routes
        .map(({ data, children }) => data[LIB_LAYOUT_NAVLESS] === true || hasNavlessInRoutesData(children))
        .find(isNavLess => isNavLess === true) === true;