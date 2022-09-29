import PropTypes from 'prop-types';

import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack
} from '@chakra-ui/react';

import { ResponsiveConstants } from '@utils/constants';

export const InputFormControl = ( props ) => {

    const { name, label, type, disabled, showLabel, registerFunc, validations, errors } = props;

    const inputErrors = errors?.[ name ];

    return (
        <FormControl isInvalid={ inputErrors }>
            <Stack
                direction={ ResponsiveConstants.mobileColumnDesktopRow }
                align='start'
            >
                { showLabel && (
                    <FormLabel fontSize={ 14 }
                               width={ ResponsiveConstants.responsive150Width }
                               htmlFor={ name }
                    >
                        { label }
                    </FormLabel>
                ) }
                <Input
                    type={ type }
                    disabled={ disabled }
                    width={ (showLabel) ? ResponsiveConstants.responsive200Width : '100%' }
                    size='sm'
                    id={ name }
                    { ...registerFunc(name, validations?.[ name ]) }
                />
            </Stack>
            <FormErrorMessage>
                { inputErrors?.message }
            </FormErrorMessage>
        </FormControl>
    )
}

InputFormControl.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

InputFormControl.defaultProps = {
    label: '</InputFormControl>',
    type: 'text',
    showLabel: true
}

