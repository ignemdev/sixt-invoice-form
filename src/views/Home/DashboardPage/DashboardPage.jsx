import { useMediaQuery } from '@chakra-ui/react';

import { SectionContainer } from '@components/layout';
import { StatCard, GraphCard } from '@components/cards';

import {
    LabelsConstants,
    ChartTypes,
    MediaQueriesConstants
} from '@utils/constants';

export const DashboardPage = () => {

    const [ isMobile ] = useMediaQuery(MediaQueriesConstants.maxWidthLarge)

    return (
        <>
            <SectionContainer title={ LabelsConstants.estadisticas }>
                <StatCard/>
                <StatCard/>
                <StatCard/>
                <StatCard/>
                <StatCard/>
            </SectionContainer>
            <SectionContainer title={ LabelsConstants.graficos } hidden={ isMobile }>
                <GraphCard name='Barra' type={ ChartTypes.bar }/>
                <GraphCard name='Donut' type={ ChartTypes.pie }/>
                <GraphCard name='Donut' type={ ChartTypes.pie }/>
                <GraphCard name='Donut' type={ ChartTypes.pie }/>
            </SectionContainer>
        </>
    );
}