import { Children, cloneElement } from 'react';

import { Divider, SimpleGrid } from '@chakra-ui/react';

import { ResponsiveConstants } from '@utils/constants/index.js';
import PropTypes from 'prop-types';

export const FormControlContainer = ( { children, registerFunc, validations, errors } ) => {
    return (
        <>
            <SimpleGrid
                columns={ ResponsiveConstants.mobile1ColumnDesktop2Column }
                spacingX={ 12 }
                spacingY={ 3 }
                my={ 4 }
                py={ 4 }>
                { Children.map(children, ( child ) =>
                    cloneElement(child, { registerFunc, validations, errors })
                ) }
            </SimpleGrid>
            <Divider/>
        </>
    )
}

FormControlContainer.propTypes = {
    registerFunc: PropTypes.func.isRequired,
    validations: PropTypes.object.isRequired,
}