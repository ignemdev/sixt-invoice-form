import {
    Flex,
    Heading,
    Spacer
} from '@chakra-ui/react';

import { NavBarSearch, NavbarButtonGroup, NavBarUser } from '@components/layout';

import { DomainConstants } from '@utils/constants';

export const NavBar = () => {

    const searchHandler = value => console.log(value);
    const searchValueHandler = value => console.log(value);

    return (
        <Flex as='header'
              boxShadow='sm'
              p='4'
              gap='5'
              alignItems='center'
              justifyContent='space-around'
        >
            <Heading size='lg'>{ DomainConstants.productName }</Heading>

            <NavBarSearch
                onSearch={ searchHandler }
                onSearchValueChange={ searchValueHandler }
            />

            <NavbarButtonGroup/>
            <NavBarUser/>
        </Flex>
    )
}