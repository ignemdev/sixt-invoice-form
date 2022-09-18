import { Box } from '@chakra-ui/react';

import { NavBar, SideBar } from '@components/layout';

const InvoiceFormApp = () => {

    const menuClickHandler = () => {
        console.log('d');
    }

    return (
        <Box as='main'>
            <NavBar onMenuClick={ menuClickHandler }/>
            <SideBar/>
        </Box>
    );
}
export default InvoiceFormApp;
