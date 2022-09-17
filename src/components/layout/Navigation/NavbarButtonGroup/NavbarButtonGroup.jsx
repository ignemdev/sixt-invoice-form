import PropTypes from 'prop-types';

import { Button, ButtonGroup } from '@chakra-ui/react';
import { ChatIcon, HamburgerIcon, SettingsIcon } from '@chakra-ui/icons';

import { LabelsConstants } from '@utils/constants';

export const NavbarButtonGroup = ( { onNotificationsClick, onMenuClick, onSettingsClick } ) => {

    return (
        <ButtonGroup gap='0.5' alignItems='center'>
            <Button
                variant='ghost'
                leftIcon={ <ChatIcon/> }
                onClick={ onNotificationsClick }
            >
                { LabelsConstants.notification }
            </Button>
            <Button
                variant='ghost'
                leftIcon={ <HamburgerIcon/> }
                onClick={ onMenuClick }
            >
                { LabelsConstants.menu }
            </Button>
            <Button
                variant='ghost'
                leftIcon={ <SettingsIcon/> }
                onClick={ onSettingsClick }
            >
                { LabelsConstants.settings }
            </Button>
        </ButtonGroup>
    )
}

NavbarButtonGroup.propTypes = {
    onNotificationsClick: PropTypes.func.isRequired,
    onMenuClick: PropTypes.func.isRequired,
    onSettingsClick: PropTypes.func.isRequired
}

NavbarButtonGroup.defaultProps = {
    onNotificationsClick: () => console.log('notificacion clicked'),
    onMenuClick: () => console.log('menu clicked'),
    onSettingsClick: () => console.log('ajustes clicked')
}
