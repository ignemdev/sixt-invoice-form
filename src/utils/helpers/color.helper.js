import { theme } from '@chakra-ui/react';

export class ColorHelper {

    static getAllThemeColorsByType ( type = '600', exclude = 'whiteAlpha' ) {
        return Object
            .entries(theme.colors)
            .map(variant => {
                if (variant[ 0 ] !== exclude)
                    return variant[ 1 ]
            })
            .map(colorSet => colorSet?.[ type ])
            .filter(color => color);
    }
}