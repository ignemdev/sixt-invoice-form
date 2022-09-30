import { useEffect, useState } from 'react';

import { Button, ButtonGroup, Divider } from '@chakra-ui/react';
import { AttachmentIcon, ExternalLinkIcon } from '@chakra-ui/icons';

import { CardContainer, SectionContainer } from '@components/layout';
import { SearchForm } from '@components/forms';
import { AppTable } from '@components/tables';

import { SizesConstants, LabelsConstants } from '@utils/constants';

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
    { numero: 4, descripcion: 'test', cantidad: 5, total: 5000 },
    { numero: 5, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 6, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 7, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 8, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 9, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 10, descripcion: 'Esto', cantidad: 5, total: 5000 },
    { numero: 11, descripcion: 'Esto', cantidad: 5, total: 5000 }
];

export const InvoicesPage = () => {
    const [ invoices, setInvoices ] = useState(tableData);

    useEffect(() => {
        //fetch the invoices to display them into the table using setInvoices
    }, []);

    const exportHandler = () => console.log(invoices);
    const shareHandler = () => console.log(invoices);

    const searchHandler = ( filter ) => {
        //fetch server to retrieve invoices based on the filterValue
        //this logic is likely to be within a service, it's here for demonstration
        const criteria = filter[ 0 ];
        const value = filter[ 1 ];

        console.log(invoices)

        const filteredInvoices = invoices.filter(invoice => invoice[ criteria ] === value);

        setInvoices(filteredInvoices);
    };

    return (
        <SectionContainer title={ LabelsConstants.registroFacturas }>
            <CardContainer maxWidth={ SizesConstants.invoicePageCardContainer }>
                <ButtonGroup
                    variant='outline'
                    spacing='2'
                    size='sm'
                    mb={ 5 }
                    justifyContent='right'
                    w='100%'
                >
                    <Button
                        colorScheme='blue'
                        variant='solid'
                        onClick={ exportHandler }
                        leftIcon={ <AttachmentIcon/> }
                    >
                        { LabelsConstants.exportar }
                    </Button>
                    <Button
                        colorScheme='blue'
                        variant='solid'
                        onClick={ shareHandler }
                        leftIcon={ <ExternalLinkIcon/> }
                    >
                        { LabelsConstants.compartir }
                    </Button>
                </ButtonGroup>

                <Divider/>

                <SearchForm onSearched={ searchHandler }/>

                <Divider/>

                <AppTable
                    maxWidth={ SizesConstants.invoicePageCardContainer }
                    data={ invoices }
                    config={ tableConfig }
                />
            </CardContainer>
        </SectionContainer>
    );
}