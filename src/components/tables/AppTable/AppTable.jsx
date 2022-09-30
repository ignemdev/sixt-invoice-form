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

export const AppTable = ( { maxHeight, maxWidth, config, data, onDataChanged } ) => {

    const [ rows, setRows ] = useState(data);

    const { columns, keyField, dataFields, operationLabel, deleteButton } = config;

    useEffect(() => {
        setRows(data)
    }, [ data ])

    const onDeletedRow = ( rowIndex ) => {
        const dataRows = rows?.filter(row => row[ keyField ] !== rowIndex);
        setRows(dataRows)
        onDataChanged(dataRows);
    }

    return (
        <TableContainer
            maxHeight={ maxHeight }
            maxWidth={ maxWidth }
            overflowY='auto'
            overflowX='auto'
        >
            <Table variant='simple' size='sm'>
                <Thead>
                    <Tr>
                        { columns?.map(column => (<Th key={ column }>{ column }</Th>)) }

                        { deleteButton && (<Th>{ operationLabel }</Th>) }
                    </Tr>
                </Thead>
                <Tbody>
                    { rows?.map(row =>
                        (<Tr key={ row[ keyField ] }>
                            { dataFields?.map(dataField =>
                                (<Td key={ `${ row[ keyField ] }-${ dataField }` }>
                                    { row[ dataField ] }
                                </Td>)
                            ) }

                            { deleteButton &&
                                (<Td alignItems='center'>
                                    <IconButton
                                        key={ row[ keyField ] }
                                        colorScheme='gray'
                                        variant='ghost'
                                        aria-label='Delete row'
                                        size='xs'
                                        onClick={ () => onDeletedRow(row[ keyField ]) }
                                        icon={ <MinusIcon/> }/>
                                </Td>) }
                        </Tr>)
                    ) }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

AppTable.propTypes = {
    maxHeight: PropTypes.string.isRequired,
    maxWidth: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    onDataChanged: PropTypes.func.isRequired
}

AppTable.defaultProps = {
    maxHeight: 'auto',
    maxWidth: 'auto',
    config: {},
    data: [],
    onDataChanged: () => console.log('<AppTable/> data changed')
}