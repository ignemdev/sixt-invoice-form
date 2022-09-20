import PropTypes from 'prop-types';

import { Box } from '@chakra-ui/react';

export const CardContainer = ( { children, fullContainerSize } ) => {
    const flex = (fullContainerSize) ? '1' : 'unset';

    return (
        <Box
            shadow='md' p={ 6 }
            rounded='sm'
            flex={ flex }
            cursor='default'
        >
            { children }
        </Box>
    )
}

CardContainer.propTypes = {
    fullContainerSize: PropTypes.bool.isRequired
}

CardContainer.defaultProps = {
    fullContainerSize: false
}