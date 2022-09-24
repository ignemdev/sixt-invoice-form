import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { TabPanel } from '@chakra-ui/react';

import { EventTypes } from '@utils/constants';

export const TabStep = ( { children, title, eventToStep, onStep } ) => {

    const onStepHandler = ( e ) => {
        e?.preventDefault();
        onStep(e);
    }

    return (
        <TabPanel>
            { Children.map(children, ( child ) =>
                cloneElement(child, { [ eventToStep ]: onStepHandler })
            ) }
        </TabPanel>
    )
}

TabStep.propTypes = {
    title: PropTypes.string.isRequired,
    eventToStep: PropTypes.string.isRequired,
    onStep: PropTypes.func.isRequired
}

TabStep.defaultProps = {
    children: [],
    title: 'Tabs',
    eventToStep: EventTypes.onClick,
    onStep: () => console.log(`</TabStep> clicked`)
}
