import { Children, cloneElement } from 'react';

import { SimpleGrid } from '@chakra-ui/react';

import { ResponsiveConstants } from '@utils/constants';
import PropTypes from 'prop-types';

export const FormControlContainer = ( { children, columns, registerFunc, validations, errors } ) => {

    // const isValidchild = ( { type: { name } } ) => {
    //     const validChildren = [ 'SelectFormControl', 'InputFormControl' ];
    //     return validChildren.includes(name);
    // }

    return (
        <SimpleGrid
            columns={ columns }
            spacingX={ 12 }
            spacingY={ 3 }
            my={ 4 }
            py={ 4 }>
            { Children.map(children, ( child ) => {
                let props = {};
                const validChildren = [ 'SelectFormControl', 'InputFormControl' ];
                if (validChildren.includes(child.type.name))
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