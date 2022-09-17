import PropTypes from 'prop-types';

import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';

import { LabelsConstants } from '@utils/constants';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const NavBarUser = ( { username, userId } ) => {

    return (
        <Menu>
            <MenuButton as={ Button } colorScheme={ 'blue' } rightIcon={ <ChevronDownIcon/> }>
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