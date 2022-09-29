import { useEffect, useState } from 'react';

import { CardContainer, SectionContainer } from '@components/layout';
import { AppTable } from '@components/tables';
import { Button, ButtonGroup } from '@chakra-ui/react';

const tableConfig = {
    columns: [ 'Numero', 'Descripcion', 'Cantidad', 'Total' ],
    keyField: 'numero',
    dataFields: [ 'numero', 'descripcion', 'cantidad', 'total' ],
    deleteButton: false,
    operationLabel: 'Operaciones'
};

const tableData = [
    { numero: 1, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 2, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 3, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 4, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 5, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 6, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 7, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 8, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 9, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 10, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 11, descripcion: 'Esto', cantidad: 5, total: 5000 }
]

export const InvoicesPage = () => {

    const [ invoices, setInvoices ] = useState(tableData);

    useEffect(() => {
        //fetch the invoices to display them into the table using setInvoices
    }, []);

    return (
        <SectionContainer title={ 'Registro de Facturas' }>
            <CardContainer>
                <ButtonGroup variant='outline' spacing='2' size={ 'sm' } mb={ 5 }
                             justifyContent={ 'right' }
                             w={ '100%' }>
                    <Button colorScheme='blue'>Exportar</Button>
                    <Button colorScheme='blue'>Guardar</Button>
                </ButtonGroup>
                <AppTable data={ invoices } config={ tableConfig }/>
            </CardContainer>
        </SectionContainer>
    );
}