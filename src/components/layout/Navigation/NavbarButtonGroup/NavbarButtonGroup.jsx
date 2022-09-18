import PropTypes from 'prop-types';

import { Button, ButtonGroup } from '@chakra-ui/react';
import { HamburgerIcon, SettingsIcon } from '@chakra-ui/icons';

import { LabelsConstants, BreakpointsConstants } from '@utils/constants';

export const NavbarButtonGroup = ( { onMenuClick, onSettingsClick, isMobile } ) => {

    return (
        <ButtonGroup
            gap='0.5'
            alignItems='center'
            variant='ghost'
            w={ BreakpointsConstants.alwaysFullWidth }
        >
            <Button
                w={ BreakpointsConstants.alwaysFullWidth }
                leftIcon={ <SettingsIcon/> }
                onClick={ onSettingsClick }
            >
                { LabelsConstants.settings }
            </Button>
            <Button
                w={ BreakpointsConstants.alwaysFullWidth }
                leftIcon={ <HamburgerIcon/> }
                onClick={ onMenuClick }
                hidden={ !isMobile }
            >
                { LabelsConstants.menu }
            </Button>
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
