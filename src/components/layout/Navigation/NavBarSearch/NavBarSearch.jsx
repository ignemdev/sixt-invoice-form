import { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Flex,
    IconButton,
    Input
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

import { LabelsConstants } from '@utils/constants';

export const NavBarSearch = ( { onSearchValueChange, onSearch } ) => {

    const [ searchValue, setSearchValue ] = useState('')

    const onSearchInputChange = ( { target } ) => {
        //do something if user is typing
        const value = target?.value;

        setSearchValue(value)
        onSearchValueChange(value)
    };

    const searchButtonHandler = () => {
        //do something with searchValue
        if (searchValue.length <= 0) return;

        console.log('<NavBarSearch/> value:', searchValue);
        onSearch(searchValue)
    }

    return (
        <Flex gap='2' flex='fit-content'>
            <Input
                border={ 0 }
                boxShadow='base'
                placeholder={ LabelsConstants.buscar }
                value={ searchValue }
                onChange={ onSearchInputChange }
            />
            <IconButton
                icon={ <SearchIcon/> }
                onClick={ searchButtonHandler }
                aria-label='navbar search'
            />
        </Flex>
    )
}

NavBarSearch.propTypes = {
    onSearchValueChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
}

NavBarSearch.defaultProps = {
    onSearchValueChange: () => console.log('<NavBarSearch/> value changed'),
    onSearch: () => console.log('<NavBarSearch/> search button clicked')
}