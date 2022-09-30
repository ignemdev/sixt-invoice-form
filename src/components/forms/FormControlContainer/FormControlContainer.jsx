import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { SimpleGrid } from '@chakra-ui/react';

import { InputFormControl, SelectFormControl } from '@components/forms';

import { ResponsiveConstants } from '@utils/constants';

const isValidchild = ( { type } ) => {
    const validChildren = [ SelectFormControl, InputFormControl ];
    return validChildren.includes(type);
}

export const FormControlContainer = ( { columns, children, registerFunc, validations, errors } ) => {
    return (
        <SimpleGrid
            columns={ columns }
            spacingX={ 12 }
            spacingY={ 3 }
            my={ 4 }
            py={ 4 }>
            { Children.map(children, ( child ) => {
                let props = {};

                if (isValidchild(child))
                    props = { registerFunc, validations, errors }

                return cloneElement(child, props)
            }) }
        </SimpleGrid>
    )
}

FormControlContainer.propTypes = {
    registerFunc: PropTypes.func.isRequired,
    validations: PropTypes.object.isRequired,
}

FormControlContainer.defaultProps = {
    columns: ResponsiveConstants.mobile1ColumnDesktop2Column
}