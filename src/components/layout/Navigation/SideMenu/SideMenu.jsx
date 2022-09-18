import PropTypes from 'prop-types';

import { Box } from '@chakra-ui/react';

export const SideMenu = ( { isMobile } ) => {
    return (
        <Box
            bg='red'
            overflowY='auto'
            p='6'
            hidden={ isMobile }
            as='aside'
        >
            DDDDDDDDDDDD
        </Box>
    )
}

SideMenu.propTypes = {
    isMobile: PropTypes.bool.isRequired
}

SideMenu.defaultProps = {
    isMobile: false
}