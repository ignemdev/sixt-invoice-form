import { useState } from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';

import { Button, Divider, SimpleGrid } from '@chakra-ui/react';

import {
    InputFormControl,
    SelectFormControl,
    FormControlContainer,
    AddProductForm
} from '@components/forms';

import { AppTabPanel, AppTabs } from '@components/tabs';
import { AppTable } from '@components/tables';

import {
    ResponsiveConstants,
    LabelsConstants,
    NamesConstants,
    InputTypes
} from '@utils/constants';

const formValidations = {
    cliente: {
        required: 'Campo Requerido'
    },
    nombre: {
        required: 'Campo Requerido'
    }
}

const tableConfig = {
    columns: [ 'Numero', 'Descripcion', 'Cantidad' ],
    keyField: 'numero',
    dataFields: [ 'numero', 'descripcion', 'cantidad' ],
    deleteButton: true,
    operationLabel: 'Operaciones'
};

export const DebtorInvoiceForm = ( { onSubmit } ) => {

    const [ products, setProducts ] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const submitHandler = ( invoice ) => {
        //run calculations, server validations using the formData object as needed
        const formData = { ...invoice, products }
        reset();
        console.log(formData)
        onSubmit();
    }

    const tableDataChangeHandler = ( dataRows ) => setProducts(dataRows);

    const onProductAddedHandler = ( addedProduct ) => {
        if (products.some(( { numero } ) => numero === addedProduct?.numero))
            return;

        setProducts(prevProduct => [ ...prevProduct, addedProduct ])
    }

    return (
        <form onSubmit={ handleSubmit(submitHandler) }>
            <FormControlContainer registerFunc={ register } validations={ formValidations } errors={ errors }>
                <InputFormControl
                    name={ NamesConstants.cliente }
                    label={ LabelsConstants.cliente }
                />
                <InputFormControl
                    name={ NamesConstants.N }
                    label={ LabelsConstants.N }
                    disabled
                    type={ InputTypes.number }
                />

                <InputFormControl
                    name={ NamesConstants.nombre }
                    label={ LabelsConstants.nombre }
                />
                <InputFormControl
                    name={ NamesConstants.estado }
                    label={ LabelsConstants.estado }
                    disabled
                />

                <SelectFormControl
                    name={ NamesConstants.personaContacto }
                    label={ LabelsConstants.personaContacto }
                    optionsData={ [ { value: 1, text: 'option A' } ] }
                />
                <InputFormControl
                    name={ NamesConstants.contabilizacion }
                    label={ LabelsConstants.contabilizacion }
                    type={ InputTypes.date }
                />

                <InputFormControl
                    name={ NamesConstants.reservacion }
                    label={ LabelsConstants.reservacion }
                />
                <InputFormControl
                    name={ NamesConstants.vencimiento }
                    label={ LabelsConstants.vencimiento }
                    type={ InputTypes.date }/>

                <SelectFormControl
                    name={ NamesConstants.moneda }
                    optionsData={ [ { value: 1, text: 'Moneda Local' } ] }
                    showLabel={ false }
                />
                <InputFormControl
                    name={ NamesConstants.fechaDocumento }
                    label={ LabelsConstants.fechaDocumento }
                    type={ InputTypes.date }
                />

                <InputFormControl
                    name={ NamesConstants.contrato }
                    label={ LabelsConstants.contrato }
                />
                <SelectFormControl
                    name={ NamesConstants.tipoNFC }
                    label={ LabelsConstants.tipoNFC }
                    optionsData={ [ { value: 1, text: 'option A' } ] }
                />

                <InputFormControl
                    name={ NamesConstants.identificacion }
                    label={ `${ LabelsConstants.RNC } / ${ LabelsConstants.cedula }` }
                />
                <InputFormControl
                    name={ NamesConstants.NFC }
                    label={ LabelsConstants.NFC }
                    disabled
                />
            </FormControlContainer>

            <Divider/>

            <AppTabs>
                <AppTabPanel title={ LabelsConstants.contenido }>
                    <AddProductForm onProductAdded={ onProductAddedHandler }/>
                    <AppTable
                        maxHeight='200px'
                        data={ products }
                        config={ tableConfig }
                        onDataChanged={ tableDataChangeHandler }
                    />
                </AppTabPanel>
                <AppTabPanel title={ LabelsConstants.logistica }>
                    2
                </AppTabPanel>
                <AppTabPanel title={ LabelsConstants.finanzas }>
                    3
                </AppTabPanel>
                <AppTabPanel title={ LabelsConstants.anexos }>
                    4
                </AppTabPanel>
            </AppTabs>

            <SimpleGrid
                columns={ ResponsiveConstants.mobile1ColumnDesktop2Column }
                spacingX={ 12 }
                spacingY={ 3 }
                alignItems='start'
            >
                <FormControlContainer
                    columns={ 1 }
                    registerFunc={ register }
                    validations={ formValidations }
                    errors={ errors }
                >
                    <SelectFormControl
                        name={ NamesConstants.vendedor }
                        label={ LabelsConstants.vendedor }
                        optionsData={ [ { value: 1, text: 'option A' } ] }
                    />
                    <InputFormControl
                        name={ NamesConstants.propietario }
                        label={ LabelsConstants.propietario }
                    />
                    <SelectFormControl
                        name={ NamesConstants.usoPrincipal }
                        label={ LabelsConstants.usoPrincipal }
                        optionsData={ [ { value: 1, text: 'option A' } ] }
                    />
                    <InputFormControl
                        name={ NamesConstants.cuentaAsociada }
                        label={ LabelsConstants.cuentaAsociada }
                    />
                    <InputFormControl
                        name={ NamesConstants.comentario }
                        label={ LabelsConstants.comentario }
                    />
                </FormControlContainer>

                <FormControlContainer
                    columns={ 1 }
                    registerFunc={ register }
                    validations={ formValidations }
                    errors={ errors }
                >
                    <InputFormControl
                        name={ NamesConstants.totalAntesDescuento }
                        label={ LabelsConstants.totalAntesDescuento }
                        disabled
                        type={ InputTypes.number }
                    />
                    <InputFormControl
                        name={ NamesConstants.anticipoTotal }
                        label={ LabelsConstants.anticipoTotal }
                        disabled
                        type={ InputTypes.number }
                    />
                    <InputFormControl
                        name={ NamesConstants.redondeo }
                        label={ LabelsConstants.redondeo }
                        type={ InputTypes.number }
                        disabled
                    />
                    <InputFormControl
                        name={ NamesConstants.impuesto }
                        label={ LabelsConstants.impuesto }
                        type={ InputTypes.number }
                        disabled
                    />
                    <InputFormControl
                        name={ NamesConstants.total }
                        label={ LabelsConstants.total }
                        type={ InputTypes.number }
                        disabled
                    />
                    <InputFormControl
                        name={ NamesConstants.importeAplicado }
                        label={ LabelsConstants.importeAplicado }
                        type={ InputTypes.number }
                        disabled
                    />
                    <InputFormControl
                        name={ NamesConstants.saldoVencido }
                        label={ LabelsConstants.saldoVencido }
                        type={ InputTypes.number }
                        disabled
                    />
                </FormControlContainer>
            </SimpleGrid>

            <Button type='submit' colorScheme='blue'>{ LabelsConstants.crear }</Button>
        </form>
    )
}

DebtorInvoiceForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

DebtorInvoiceForm.defaultProps = {
    onSubmit: () => console.log('<DebtorInvoiceForm/> submited')
}