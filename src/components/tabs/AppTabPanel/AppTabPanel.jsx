import PropTypes from 'prop-types';

import { TabPanel } from '@chakra-ui/react';

export const AppTabPanel = ( { children, title } ) => {
    return (
        <TabPanel p={ 0 }>
            { children }
        </TabPanel>
    )
}

AppTabPanel.propTypes = {
    title: PropTypes.string.isRequired
}

AppTabPanel.defaultProps = {
    title: 'Tab'
}