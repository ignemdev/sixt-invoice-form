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
import { useState } from 'react';
import { ResponsiveConstants } from '@utils/constants/index.js';

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
        const formData = { ...invoice, products }
        reset();
        console.log(formData)
        onSubmit();
    }

    const tableDataChangeHandler = ( dataRows ) => setProducts(dataRows);

    const onProductAddedHandler = ( addedProduct ) => {
        if (products.some((( { numero } ) => numero === addedProduct?.numero)))
            return;

        setProducts(prevProduct => [ ...prevProduct, addedProduct ])
    }

    return (
        <form onSubmit={ handleSubmit(submitHandler) }>
            <FormControlContainer registerFunc={ register } validations={ formValidations } errors={ errors }>
                <InputFormControl name={ 'cliente' } label={ 'Cliente' }/>
                <InputFormControl name={ 'N' } label={ 'N' } disabled type={ 'number' }/>

                <InputFormControl name={ 'nombre' } label={ 'Nombre' }/>
                <InputFormControl name={ 'estado' } label={ 'Estado' } disabled/>

                <SelectFormControl name={ 'personaContacto' } label={ 'Persona de Contacto' }
                                   optionsData={ [ { value: 1, text: 'option A' } ] }/>
                <InputFormControl name={ 'contabilizacion' } type={ 'date' } label={ 'Contabilizacion' }/>

                <InputFormControl name={ 'reservacion' } label={ 'Reservacion' }/>
                <InputFormControl name={ 'vencimiento' } label={ 'Vencimiento' }
                                  type={ 'date' }/>

                <SelectFormControl name={ 'Moneda' }
                                   optionsData={ [ { value: 1, text: 'Moneda Local' } ] } showLabel={ false }/>
                <InputFormControl name={ 'fechaDocumento' } label={ 'Fecha de Documento' } type={ 'date' }/>

                <InputFormControl name={ 'contrato' } label={ 'Contrato' }/>
                <SelectFormControl name={ 'tipoNFC' } label={ 'Tipo NFC' }
                                   optionsData={ [ { value: 1, text: 'option A' } ] }/>

                <InputFormControl name={ 'identificacion' } label={ 'RNC / Cedula' }/>
                <InputFormControl name={ 'NFC' } label={ 'NFC' } disabled/>
            </FormControlContainer>
        </form>
    )
}

DebtorInvoiceForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

DebtorInvoiceForm.defaultProps = {
    onSubmit: () => console.log('<DebtorInvoiceForm/> submited')
}