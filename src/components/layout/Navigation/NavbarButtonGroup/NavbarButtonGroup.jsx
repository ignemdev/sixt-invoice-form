import PropTypes from 'prop-types';

import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, SettingsIcon } from '@chakra-ui/icons';

import { LabelsConstants, ResponsiveConstants } from '@utils/constants';

export const NavbarButtonGroup = ( { onMenuClick, onSettingsClick, isMobile } ) => {

    return (
        <ButtonGroup
            gap='0.5'
            justifyContent='center'
            variant='ghost'
            w={ ResponsiveConstants.mobile100DesktopAuto }
        >
            <Button
                w={ ResponsiveConstants.mobile100DesktopAuto }
                leftIcon={ <SettingsIcon/> }
                onClick={ onSettingsClick }
                width={ 'full' }
            >
                { LabelsConstants.ajustes }
            </Button>
            <IconButton
                w={ ResponsiveConstants.mobile100DesktopAuto }
                icon={ <HamburgerIcon/> }
                onClick={ onMenuClick }
                hidden={ !isMobile }
                aria-label='mobile hamburguer'
            />
        </ButtonGroup>
    )
}

NavbarButtonGroup.propTypes = {
    onMenuClick: PropTypes.func.isRequired,
    onSettingsClick: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired
}

NavbarButtonGroup.defaultProps = {
    onMenuClick: () => console.log('menu clicked from <NavbarButtonGroup/>'),
    onSettingsClick: () => console.log('settings clicked from <NavbarButtonGroup/>'),
    isMobile: false
}
