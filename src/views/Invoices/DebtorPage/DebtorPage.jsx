import { CardContainer, SectionContainer } from '@components/layout';

import { TabsStepper, TabStep } from '@components/tabs';
import { DebtorInvoiceForm } from '@components/forms';

import { LabelsConstants, EventTypes } from '@utils/constants';

export const DebtorPage = () => {
    return (
        <SectionContainer title={ LabelsConstants.facturas }>
            <CardContainer>
                <TabsStepper>
                    <TabStep title={ LabelsConstants.facturasDeudor } eventToStep={ EventTypes.onSubmit }>
                        <DebtorInvoiceForm/>
                    </TabStep>
                </TabsStepper>
            </CardContainer>
        </SectionContainer>
    );
}