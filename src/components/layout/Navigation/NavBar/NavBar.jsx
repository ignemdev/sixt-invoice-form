import { Flex, Heading } from '@chakra-ui/react';

import {
    NavBarSearch,
    NavbarButtonGroup,
    NavBarUser
} from '@components/layout';

import { DomainConstants } from '@utils/constants';

export const NavBar = ( { onMenuClick } ) => {

    const searchHandler = value => console.log(value);
    const searchValueHandler = value => console.log(value);
    const menuClickHandler = () => onMenuClick()

    return (
        <Flex as='header'
              boxShadow='sm'
              p='4'
              px='6'
              gap='5'
              alignItems='center'
              flexWrap='wrap'
              justifyContent='center'
        >
            <Heading size='lg'>{ DomainConstants.productName }</Heading>

            <NavBarSearch
                onSearch={ searchHandler }
                onSearchValueChange={ searchValueHandler }
            />

            <NavBarUser/>
            <NavbarButtonGroup onMenuClick={ menuClickHandler }/>
        </Flex>
    )
}