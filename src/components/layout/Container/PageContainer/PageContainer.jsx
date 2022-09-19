import { Outlet } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';

import { BreakpointsConstants } from '@utils/constants/index.js';

export const PageContainer = () => {

    return (
        <Flex as='section' p={ 6 } flex={ 1 } flexDir={ 'column' } gap={ 5 }>
            <Outlet/>
        </Flex>
    )
}