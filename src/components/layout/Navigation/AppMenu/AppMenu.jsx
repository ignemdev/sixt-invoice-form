import PropTypes from 'prop-types';

import { Icon, List } from '@chakra-ui/react';
import {
    AiOutlineFileAdd,
    MdDashboard,
    TbFileInvoice
} from 'react-icons/all';

import { AppMenuSection, AppMenuItem } from '@components/layout';

import { LabelsConstants } from '@utils/constants';

export const AppMenu = ( { onItemClick } ) => {

    return (
        <List spacing={ 8 } cursor='default'>
            <AppMenuSection title={ LabelsConstants.inicio } spacing={ 1 }>
                <AppMenuItem
                    onClick={ onItemClick }
                    href={ '/dashboard' }
                    label={ LabelsConstants.dashboard }
                    icon={ <Icon as={ MdDashboard }/> }
                />
            </AppMenuSection>
            <AppMenuSection title={ LabelsConstants.facturas } spacing={ 1 }>
                <AppMenuItem
                    onClick={ onItemClick }
                    href={ 'facturas/nueva' }
                    label={ LabelsConstants.nueva }
                    icon={ <Icon as={ AiOutlineFileAdd }/> }
                />
                <AppMenuItem
                    onClick={ onItemClick }
                    href={ 'facturas/' }
                    label={ LabelsConstants.registro }
                    icon={ <Icon as={ TbFileInvoice }/> }
                />
            </AppMenuSection>
        </List>
    )
}

AppMenu.propTypes = {
    onItemClick: PropTypes.func.isRequired
}

AppMenu.defaultProps = {
    onItemClick: () => console.log('<AppMenu/> menu item clicked')
}