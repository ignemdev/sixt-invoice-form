import { Children, cloneElement } from 'react';

import { SimpleGrid } from '@chakra-ui/react';

import { ResponsiveConstants } from '@utils/constants';
import PropTypes from 'prop-types';

// const isValidchild = ( { type: { name } } ) => {
//     const validChildren = [ 'SelectFormControl', 'InputFormControl' ];
//     return validChildren.includes(name);
// }

export const FormControlContainer = ( { children, columns, registerFunc, validations, errors } ) => {
    return (
        <SimpleGrid
            columns={ columns }
            spacingX={ 12 }
            spacingY={ 3 }
            my={ 4 }
            py={ 4 }>
            {/*{ Children.map(children, ( child ) => {*/ }
            {/*    let props = {};*/ }

            {/*    if (isValidchild(child))*/ }
            {/*        props = { registerFunc, validations, errors }*/ }

            {/*    return cloneElement(child, props)*/ }
            {/*}) }*/ }
            { children }
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