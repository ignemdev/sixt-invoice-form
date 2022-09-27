import { Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react';
import { Children } from 'react';

export const AppTabs = ( { children } ) => {
    const tabs = Children.toArray(children)?.map(( { props: { title } } ) => title);

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
                { tabs?.map(( title, i ) =>
                    <Tab key={ title }>{ title }</Tab>
                ) }
            </TabList>
            <TabPanels>
                { children }
            </TabPanels>
        </Tabs>
    )
}