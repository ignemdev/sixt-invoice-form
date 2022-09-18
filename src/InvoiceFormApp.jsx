import { Box, useDisclosure } from '@chakra-ui/react';

import { NavBar, SideBar } from '@components/layout';

const InvoiceFormApp = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box as='main'>
            <NavBar onMenuClick={ onOpen }/>

            <SideBar isOpen={ isOpen } onClose={ onClose }/>

            <Box as='section' bg={ 'gray.500' } m={ 6 }>
                pages...
            </Box>
        </Box>
    );
}
export default InvoiceFormApp;
