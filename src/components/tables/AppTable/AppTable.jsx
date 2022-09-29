import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    IconButton,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';

import { MinusIcon } from '@chakra-ui/icons';

export const AppTable = ( { config, data, maxHeight, onDataChanged } ) => {

    const { columns, keyField, dataFields, operationLabel, deleteButton } = config;

    const [ rows, setRows ] = useState(data);

    useEffect(() => {
        setRows(data)
    }, [ data ])

    const onDeletedRow = ( rowIndex ) => {
        const dataRows = rows?.filter(row => row[ keyField ] !== rowIndex);
        setRows(dataRows)
        onDataChanged(dataRows);
    }

    return (
        <TableContainer maxHeight={ maxHeight } overflowY='auto'>
            <Table
                variant='simple'
                size='sm'
            >
                <Thead>
                    <Tr>
                        { columns?.map(column => (<Th key={ column }>{ column }</Th>)) }
                        { deleteButton && <Th>{ operationLabel }</Th> }
                    </Tr>
                </Thead>
                <Tbody>
                    { rows?.map(row => (
                            <Tr key={ row[ keyField ] }>
                                { dataFields?.map(dataField => (
                                        <Td key={ `${ row[ keyField ] }-${ dataField }` }>
                                            { row[ dataField ] }
                                        </Td>
                                    )
                                ) }
                                { deleteButton && (
                                    <Td alignItems={ 'center' }>
                                        <IconButton
                                            key={ row[ keyField ] }
                                            colorScheme='gray'
                                            variant='ghost'
                                            aria-label='Delete item'
                                            size='xs'
                                            onClick={ () => onDeletedRow(row[ keyField ]) }
                                            icon={ <MinusIcon/> }/>
                                    </Td>
                                ) }
                            </Tr>
                        )
                    ) }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

AppTable.propTypes = {
    config: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    onDataChanged: PropTypes.func.isRequired,
    maxHeight: PropTypes.string.isRequired
}

AppTable.defaultProps = {
    config: {},
    data: [],
    onDataChanged: () => console.log('<AppTable/> data changed'),
    maxHeight: 'auto'
}