import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    Flex,
    Heading,
    useDisclosure
} from '@chakra-ui/react';

import {
    NavBarSearch,
    NavbarButtonGroup,
    NavBarUser,
    MobileMenu
} from '@components/layout';

import { DomainConstants } from '@utils/constants';

export const NavBar = ( { isMobile } ) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const searchHandler = value => console.log(value);
    const searchValueHandler = value => console.log(value);

    return (
        <Flex as='header'
              p={ 4 }
              px={ 6 }
              gap={ 5 }
              alignItems='center'
              flexWrap='wrap'
        >
            <Heading size='lg' as={ Link } to='/'>
                { DomainConstants.productName }
            </Heading>

            <NavBarSearch
                onSearch={ searchHandler }
                onSearchValueChange={ searchValueHandler }
            />

            <NavBarUser/>

            <NavbarButtonGroup onMenuClick={ onOpen } isMobile={ isMobile }/>

            <MobileMenu isOpen={ isOpen } onClose={ onClose }/>
        </Flex>
    )
}

NavBar.propTypes = {
    isMobile: PropTypes.bool.isRequired
}

NavBar.defaultProps = {
    isMobile: false
}