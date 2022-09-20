import { Outlet } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

export const PageContainer = () => {

    return (
        <Flex
            as='section'
            p={ 6 }
            flex={ 1 }
            flexDir='column'
            gap={ 5 }>
            <Outlet/>
        </Flex>
    )
}