import { ColorHelper } from '@utils/helpers';

export class BreakpointsConstants {
    static alwaysFullWidth = [ '100%', '100%', '100%', 'auto' ];
    static mobileCenterEvenly = [ 'center', 'space-evenly', 'space-evenly', 'start' ];
}

export class MediaQueriesConstants {
    static maxWidthLarge = '(max-width: 62em)';
}

export class SizesConstants {
    static remainingScreen = '92vh';
}

export class ColorsConstants {
    static all400ThemeColors = ColorHelper.getAllThemeColorsByType('400');
}