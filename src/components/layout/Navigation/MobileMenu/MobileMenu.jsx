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

import { LabelsConstants } from '@utils/constants';

import { AppMenu } from '@components/layout/index.js';

export const MobileMenu = ( { isOpen, onClose } ) => {

    return (
        <Box>
            <Drawer placement='right' onClose={ onClose } isOpen={ isOpen }>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader borderBottomWidth='1px'>{ LabelsConstants.menu }</DrawerHeader>
                    <DrawerBody>
                        <AppMenu onItemClick={ onClose }/>
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