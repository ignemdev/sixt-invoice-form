import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Heading } from '@chakra-ui/react';

import { CardContainer } from '@components/layout';
import { AppPieChart, AppBarChart } from '@components/charts';

import { ChartTypes } from '@utils/constants';

export const GraphCard = ( { name, dataUrl, fullContainerSize, type } ) => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        //fetch en set data with setData, also a loading will be nice
    }, []);

    return (
        <CardContainer fullContainerSize={ fullContainerSize }>
            <Heading
                as='h5'
                size='md'
                textAlign='center'
                mb={ 2 }>
                { name }
            </Heading>
            {
                {
                    [ ChartTypes.bar ]: <AppBarChart/>,
                    [ ChartTypes.pie ]: <AppPieChart/>
                }[ type ]
            }
        </CardContainer>
    )
}

GraphCard.propTypes = {
    dataUrl: PropTypes.string.isRequired,
    fullContainerSize: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

GraphCard.defaultProps = {
    dataUrl: 'www.api-url.com/stats/vehicles',
    fullContainerSize: false,
    name: 'Grafico',
    type: ChartTypes.bar,
}