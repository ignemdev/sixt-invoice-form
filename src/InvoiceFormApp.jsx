import { Box, Flex, useMediaQuery } from '@chakra-ui/react';

import { NavBar, SideMenu, PageContainer } from '@components/layout';

import { MediaQueriesConstants, SizesConstants } from '@utils/constants';

const InvoiceFormApp = () => {

    const [ isMobile ] = useMediaQuery(MediaQueriesConstants.maxWidthLarge)

    return (
        <Box as='main'>
            <NavBar isMobile={ isMobile }/>

            <Flex as='section' h={ SizesConstants.remainingScreen }>
                <SideMenu isMobile={ isMobile }/>
                <PageContainer/>
            </Flex>
        </Box>
    );
}
export default InvoiceFormApp;
