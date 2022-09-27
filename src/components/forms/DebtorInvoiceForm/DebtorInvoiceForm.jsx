import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';

import { Button } from '@chakra-ui/react';

import {
    InputFormControl,
    SelectFormControl,
    FormControlContainer
} from '@components/forms';

const validations = {
    cliente: {
        required: 'Campo Requerido'
    },
    nombre: {
        required: 'Campo Requerido'
    }
}

export const DebtorInvoiceForm = ( { onSubmit } ) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const submitHandler = ( values ) => {
        console.log(values);
        reset();
        // onSubmit();
    }

    return (
        <form onSubmit={ handleSubmit(submitHandler) }>
            <FormControlContainer registerFunc={ register } validations={ validations } errors={ errors }>
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
                <InputFormControl name={ 'NFC' } label={ 'NFC' }/>
            </FormControlContainer>


            <Button type={ 'submit' }>si</Button>

        </form>
    )
}

DebtorInvoiceForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

DebtorInvoiceForm.defaultProps = {
    onSubmit: () => console.log('<DebtorInvoiceForm/> submited')
}