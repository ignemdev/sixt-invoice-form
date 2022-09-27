import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    FormControl, FormErrorMessage,
    FormLabel,
    Select,
    Stack
} from '@chakra-ui/react';

import { ResponsiveConstants } from '@utils/constants';

export const SelectFormControl = ( props ) => {

    const {
        name,
        label,
        disabled,
        optionsData,
        dataUrl,
        showLabel,
        registerFunc,
        validations,
        errors
    } = props;

    const [ options, setOptions ] = useState(optionsData);

    const inputErrors = errors?.[ name ];

    const fetchOptionsData = async () => {
        //fetch data and use setOptions
        setOptions([]);
    }

    useEffect(() => {
        //fill using either optionsData or url to fetch some data
        if (dataUrl?.length > 0)
            fetchOptionsData();
    }, []);

    return (
        <FormControl isInvalid={ inputErrors }>
            <Stack
                direction={ ResponsiveConstants.mobileColumnDesktopRow }
                align={ ResponsiveConstants.mobileCenterDesktopStart }
            >
                { showLabel && (
                    <FormLabel fontSize={ 14 }
                               width={ ResponsiveConstants.responsive150Width }
                               htmlFor={ name }
                    >
                        { label }
                    </FormLabel>
                ) }
                <Select
                    disabled={ disabled }
                    id={ name }
                    width={ (showLabel) ? ResponsiveConstants.responsive200Width : '100%' }
                    size='sm'
                    { ...registerFunc(name, validations?.[ name ]) }
                >
                    { options?.map(( { value, text } ) =>
                        (<option key={ value } value={ value }>{ text }</option>)
                    ) }
                </Select>
            </Stack>
            <FormErrorMessage>
                { inputErrors?.message }
            </FormErrorMessage>
        </FormControl>
    )
}

SelectFormControl.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

SelectFormControl.defaultProps = {
    label: '</SelectFormControl>',
    showLabel: true
}
