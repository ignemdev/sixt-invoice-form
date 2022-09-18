import { Box } from '@chakra-ui/react';

import { NavBar, SideBar } from '@components/layout';

const InvoiceFormApp = () => {

    return (
        <Box as='main'>
            <NavBar/>
            <SideBar/>
        </Box>
    );
}
export default InvoiceFormApp;
