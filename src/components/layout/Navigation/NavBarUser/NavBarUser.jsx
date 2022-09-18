import PropTypes from 'prop-types';

import {
    Button,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

import { LabelsConstants, BreakpointsConstants } from '@utils/constants';

export const NavBarUser = ( { username, userId } ) => {

    return (
        <Menu matchWidth={ true }>
            <MenuButton
                as={ Button }
                colorScheme={ 'blue' }
                rightIcon={ <ChevronDownIcon/> }
                w={ BreakpointsConstants.alwaysFullWidth }
            >
                { username }
            </MenuButton>
            <MenuList>
                <MenuGroup title={ LabelsConstants.perfil }>
                    <MenuItem>{ LabelsConstants.miCuenta }</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

NavBarUser.propTypes = {
    username: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
}

NavBarUser.defaultProps = {
    username: 'John Doe',
    userId: 0
}