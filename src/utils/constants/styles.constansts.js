import { ColorHelper, StylesHelper } from '@utils/helpers';

export class ResponsiveConstants {
    static mobile100DesktopAuto = [ '100%', '100%', '100%', 'auto' ];
    static mobileColumnDesktopStart = [ 'center', 'space-evenly', 'space-evenly', 'start' ];
    static mobileColumnDesktopRow = [ 'column', null, 'row' ];
    static mobileCenterDesktopStart = [ 'center', null, 'start' ];
    static mobile1ColumnDesktop2Column = [ 1, null, 2 ];
    static responsive150Width = StylesHelper.getResponsiveWidthSet(150);
    static responsive200Width = StylesHelper.getResponsiveWidthSet(200);
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