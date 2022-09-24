import {
    Children,
    useEffect,
    useState
} from 'react';

export const useStepper = ( children ) => {
    const [ tabIndex, setTabIndex ] = useState(0);
    const [ tabs, setTabs ] = useState([]);

    useEffect(() => {
        const childrenTabs = Children.toArray(children)?.map(( { props: { title } } ) => title);

        setTabs(childrenTabs);
    }, [])

    const onTabClick = () => {
        let newTabIndex = tabIndex + 1;

        if (newTabIndex === tabs?.length)
            newTabIndex = 0

        setTabIndex(newTabIndex);
    }

    return {
        tabs,
        tabIndex,
        onTabClick
    }
}