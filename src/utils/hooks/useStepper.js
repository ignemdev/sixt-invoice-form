import { useEffect, useState } from 'react';

export const useStepper = ( children ) => {
    const [ tabIndex, setTabIndex ] = useState(0);
    const [ tabs, setTabs ] = useState([]);

    useEffect(() => {
        if (!Array.isArray(children))
            children = [ children ];

        const childrenTabs = children?.map(( { props: { title } } ) => title);

        setTabs(childrenTabs);

    }, [])

    const onTabClick = () => {
        if ((tabIndex + 1) === tabs?.length)
            return;

        setTabIndex(prevTabIndex => prevTabIndex += 1);
    }

    return {
        tabs,
        tabIndex,
        onTabClick
    }
}