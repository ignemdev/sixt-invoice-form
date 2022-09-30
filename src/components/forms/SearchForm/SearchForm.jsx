import { useForm } from 'react-hook-form';

import { IconButton } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

import { FormControlContainer, InputFormControl, SelectFormControl } from '@components/forms';

import { ResponsiveConstants } from '@utils/constants';
import PropTypes from 'prop-types';

const formValidations = {
    criteria: {
        required: 'Campo Requerido'
    },
    value: {
        required: 'Campo Requerido'
    }
};

const getFilter = ( values ) => {
    return Object.values(values);
}

export const SearchForm = ( { criterias, onSearched } ) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submitHandler = ( values ) => {
        const filter = getFilter(values);
        onSearched(filter)
        reset();
    }

    return (
        <FormControlContainer
            registerFunc={ register }
            columns={ ResponsiveConstants.mobile1ColumnDesktop3Column }
            validations={ formValidations }
            errors={ errors }>

            <SelectFormControl
                name={ 'criteria' }
                label={ 'Criterio' }
                optionsData={ criterias }/>

            <InputFormControl
                name={ 'value' }
                label={ 'Valor' }
            />

            <IconButton
                width={ ResponsiveConstants.responsiveMinContentWidth }
                size='sm'
                aria-label='Search'
                icon={ <Search2Icon/> }
                onClick={ handleSubmit(submitHandler) }
            />
        </FormControlContainer>
    )
}

SearchForm.propTypes = {
    criterias: PropTypes.array.isRequired,
    onSearched: PropTypes.func.isRequired
}

SearchForm.defaultProps = {
    criterias: [
        { text: 'numero' },
        { text: 'cantidad' },
        { text: 'descripcion' }
    ],
    onSearched: () => console.log('<SearchForm/> searched')
}