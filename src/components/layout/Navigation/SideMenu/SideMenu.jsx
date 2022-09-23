import PropTypes from 'prop-types';

import { Box } from '@chakra-ui/react';

import { AppMenu } from '@components/layout';

export const SideMenu = ( { isMobile } ) => {
    return (
        <Box
            overflowY='auto'
            p={ 6 }
            hidden={ isMobile }
            as='aside'
            minWidth='250px'
        >
            <AppMenu/>
        </Box>
    )
}

SideMenu.propTypes = {
    isMobile: PropTypes.bool.isRequired
}

SideMenu.defaultProps = {
    isMobile: false
}