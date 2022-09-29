import { ColorHelper, StylesHelper } from '@utils/helpers';

export class ResponsiveConstants {
    static mobile100DesktopAuto = [ '100%', '100%', '100%', 'auto' ];
    static mobileColumnDesktopStart = [ 'center', 'space-evenly', 'space-evenly', 'start' ];
    static mobileColumnDesktopRow = [ 'column', null, 'row' ];
    static mobileCenterDesktopStart = [ 'center', null, 'start' ];
    static mobile1ColumnDesktop2Column = [ 1, null, 2 ];
    static mobile1ColumnDesktop3Column = [ 1, null, 3 ];
    static responsive150Width = StylesHelper.getResponsiveWidthSet(150);
    static responsive200Width = StylesHelper.getResponsiveWidthSet(200);
    static responsiveMinContentWidth = StylesHelper.getResponsiveWidthSet('min-content');
}

export class MediaQueriesConstants {
    static maxWidthLarge = '(max-width: 62em)';
}

export class SizesConstants {
    static remainingScreen = '92vh';
    static debtorInvoiceForm = '788px';
}

export class ColorsConstants {
    static all400ThemeColors = ColorHelper.getAllThemeColorsByType('400');
}