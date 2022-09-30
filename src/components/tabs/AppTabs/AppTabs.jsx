import {
    Tab,
    TabList,
    TabPanels,
    Tabs
} from '@chakra-ui/react';

import { ComponentHelper } from '@utils/helpers';

export const AppTabs = ( { children } ) => {
    const tabs = ComponentHelper.getPropArrayFromChildren(children, 'title');

    return (
        <Tabs
            variant='enclosed-colored'
            colorScheme='blue'
            isFitted
            size='sm'
            align='left'
            my={ 4 }
            py={ 4 }
        >
            <TabList>
                { tabs?.map(title => (<Tab key={ title }>{ title }</Tab>)) }
            </TabList>
            <TabPanels>
                { children }
            </TabPanels>
        </Tabs>
    )
}