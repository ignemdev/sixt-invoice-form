import PropTypes from 'prop-types';

import {
    Cell,
    LabelList,
    Pie,
    PieChart,
    Tooltip
} from 'recharts';

import { ColorsConstants } from '@utils/constants/index.js';

const COLORS = ColorsConstants.all400ThemeColors;

export const AppPieChart = ( { data } ) => {
    return (
        <PieChart width={ 300 } height={ 300 }>
            <Pie
                dataKey="value"
                data={ data }
                cx="50%"
                cy="50%"
                outerRadius={ 90 }
                innerRadius={ 40 }
                label
            >
                <LabelList dataKey="name" fontSize={ 12 } fontWeight={ 1 }/>
                { data?.map(( entry, index ) => (
                    <Cell key={ `cell-${ index }` }
                          fill={ COLORS[ index % COLORS.length ] }/>
                )) }
            </Pie>
            <Tooltip/>
        </PieChart>
    )
}

AppPieChart.propTypes = {
    data: PropTypes.array.isRequired
}

AppPieChart.defaultProps = {
    data: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 }
    ]
}