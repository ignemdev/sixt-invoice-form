import PropTypes from 'prop-types';

import {
    Box,
    Divider,
    Flex,
    Heading
} from '@chakra-ui/react';

import { ResponsiveConstants } from '@utils/constants/index.js';

export const SectionContainer = ( { children, title, hidden } ) => {
    return (
        <Box hidden={ hidden }>
            <Flex
                gap={ 5 }
                flexWrap='wrap'
                justifyContent={ ResponsiveConstants.mobileColumnDesktopStart }
                alignItems='start'>
                <Heading as='h5' size='sm'>{ title }</Heading>
                <Divider/>
                { children }
            </Flex>
        </Box>
    )
}

SectionContainer.propTypes = {
    title: PropTypes.string.isRequired,
    hidden: PropTypes.bool.isRequired
}

SectionContainer.defaultProps = {
    title: 'Section',
    hidden: false
}