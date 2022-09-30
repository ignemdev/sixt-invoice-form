import {
    useEffect,
    useState
} from 'react';

import { ComponentHelper } from '@utils/helpers';

export const useStepper = ( children ) => {
    const [ tabIndex, setTabIndex ] = useState(0);
    const [ tabs, setTabs ] = useState([]);

    useEffect(() => {
        const childrenTabs = ComponentHelper.getPropArrayFromChildren(children, 'title');

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