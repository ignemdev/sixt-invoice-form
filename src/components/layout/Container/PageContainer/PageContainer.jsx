import { Outlet } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

import { BreakpointsConstants } from '@utils/constants/index.js';

export const PageContainer = () => {

    return (
        <Box as='section' p={ 6 } w={ BreakpointsConstants.alwaysFullWidth }>
            <Box
                shadow='sm' p={ 6 }
                rounded='md'
            >
                <Outlet/>
            </Box>
        </Box>
    )
}