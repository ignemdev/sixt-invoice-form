import PropTypes from 'prop-types';

import { Box } from '@chakra-ui/react';

export const CardContainer = ( { children, maxWidth, fullContainerSize } ) => {
    const flex = (fullContainerSize) ? '1' : 'unset';

    return (
        <Box
            shadow='md' p={ 6 }
            rounded='sm'
            flex={ flex }
            cursor='default'
            maxWidth={ maxWidth }
        >
            { children }
        </Box>
    )
}

CardContainer.propTypes = {
    fullContainerSize: PropTypes.bool.isRequired,
    maxWidth: PropTypes.string.isRequired
}

CardContainer.defaultProps = {
    fullContainerSize: false,
    maxWidth: 'auto',
}