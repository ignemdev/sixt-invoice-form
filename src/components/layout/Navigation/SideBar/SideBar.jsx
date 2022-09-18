import PropTypes from 'prop-types';

import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay
} from '@chakra-ui/react';

export const SideBar = ( { isOpen, onClose } ) => {

    return (
        <Box as='aside'>
            <Drawer placement='right' onClose={ onClose } isOpen={ isOpen }>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <span>Some contents...</span>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

SideBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

SideBar.defaultProps = {
    isOpen: false,
    onClose: () => console.log('se cerro el sidebar')
}