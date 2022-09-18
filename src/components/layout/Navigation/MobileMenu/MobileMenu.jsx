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

export const MobileMenu = ( { isOpen, onClose } ) => {

    return (
        <Box>
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

MobileMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

MobileMenu.defaultProps = {
    isOpen: false,
    onClose: () => console.log('<MobileMenu/> closed')
}