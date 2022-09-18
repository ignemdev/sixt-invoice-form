import PropTypes from 'prop-types';

import { Flex, Heading } from '@chakra-ui/react';

import { LabelsConstants } from '@utils/constants';

export const AppMenuSection = ( { children, title, spacing } ) => {
    return (
        <Flex flexDir={ 'column' } gap={ spacing }>
            <Heading as='h1' size='sm' textTransform={ 'uppercase' }>{ title }</Heading>
            { children }
        </Flex>
    )
}

AppMenuSection.propTypes = {
    title: PropTypes.string.isRequired,
    spacing: PropTypes.number.isRequired
}

AppMenuSection.defaultProps = {
    title: LabelsConstants.seccion,
    spacing: 3
}