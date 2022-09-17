import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
    styles: {
        global: {
            'html, body': {
                color: 'gray.600'
            },
        },
    },
});