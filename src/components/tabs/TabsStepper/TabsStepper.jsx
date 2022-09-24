import { Children, cloneElement } from 'react';

import {
    Tab,
    TabList,
    TabPanels,
    Tabs
} from '@chakra-ui/react';

import { useStepper } from '@utils/hooks';

export const TabsStepper = ( { children } ) => {

    const { tabs, tabIndex, onTabClick } = useStepper(children);

    return (
        <Tabs
            index={ tabIndex }
            variant='enclosed-colored'
            colorScheme='blue'
            isFitted
            size='sm'
            align='left'
        >
            <TabList>
                { tabs?.map(( title, i ) =>
                    <Tab isDisabled={ i !== tabIndex } key={ title }>{ title }</Tab>
                ) }
            </TabList>
            <TabPanels>
                { Children.map(children, ( child ) =>
                    cloneElement(child, { onStep: onTabClick })
                ) }
            </TabPanels>
        </Tabs>
    )
}