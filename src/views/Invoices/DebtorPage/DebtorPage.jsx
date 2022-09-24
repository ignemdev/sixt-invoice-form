import { CardContainer, SectionContainer } from '@components/layout';

import { TabsStepper, TabStep } from '@components/tabs';

import { LabelsConstants, EventTypes } from '@utils/constants';

export const DebtorPage = () => {
    return (
        <SectionContainer title={ LabelsConstants.facturasDeudor }>
            <CardContainer>
                <TabsStepper>
                    <TabStep title={ LabelsConstants.facturasDeudor } eventToStep={ EventTypes.onSubmit }>
                        <form>
                            <input required/>
                            <button type={ 'submit' }>test</button>
                        </form>
                    </TabStep>
                    <TabStep title={ 'No' } eventToStep={ EventTypes.onSubmit }>
                        <form>
                            <input required/>
                            <button type={ 'submit' }>test</button>
                        </form>
                    </TabStep>
                </TabsStepper>
            </CardContainer>
        </SectionContainer>
    );
}