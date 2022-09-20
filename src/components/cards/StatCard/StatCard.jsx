import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    Stat,
    StatArrow,
    StatHelpText,
    StatLabel,
    StatNumber
} from '@chakra-ui/react';

import { CardContainer } from '@components/layout';

const exampleData = {
    name: 'Vehiculos',
    number: '50,000',
    percent: '28,00',
    increase: true,
    helpText: 'Desde mes pasado'
}

export const StatCard = ( { dataUrl, fullContainerSize } ) => {

    const [ stat, setStat ] = useState(exampleData);

    const { name, number, percent, increase, helpText } = stat;

    useEffect(() => {
        //fetch stats with dataUrl and use setStat(data)
    }, []);

    const type = (increase) ? 'increase' : 'decrease';

    return (
        <CardContainer fullContainerSize={ fullContainerSize }>
            <Stat textAlign={ 'center' }>
                <StatLabel>{ name }</StatLabel>
                <StatNumber>{ number }</StatNumber>
                <StatHelpText>
                    <StatArrow type={ type }/>
                    { percent }%
                </StatHelpText>
                <StatHelpText>
                    { helpText }
                </StatHelpText>
            </Stat>
        </CardContainer>
    )
}

StatCard.propTypes = {
    dataUrl: PropTypes.string.isRequired,
    fullContainerSize: PropTypes.bool.isRequired
}

StatCard.defaultProps = {
    dataUrl: 'www.api-url.com/stats/vehicles',
    fullContainerSize: false
}