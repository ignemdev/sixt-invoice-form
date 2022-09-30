import { useForm } from 'react-hook-form';

import { Box, IconButton } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';

import {
    FormControlContainer,
    InputFormControl,
    SelectFormControl
} from '@components/forms';

import {
    ResponsiveConstants,
    SizesConstants,
    NamesConstants,
    LabelsConstants,
    InputTypes
} from '@utils/constants';

const formValidations = {
    numero: {
        required: 'Campo Requerido'
    },
    cantidad: {
        required: 'Campo Requerido'
    }
}

export const AddProductForm = ( { onProductAdded } ) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const submitHandler = async ( product ) => {
        const { numero, cantidad } = product;

        //use numero to fetch info about product and assign it to new product
        //validate cantidad against your stock in the database for this specific product
        const newProduct = { ...product, numero: Number(numero), descripcion: 'test' };

        onProductAdded(newProduct);
        reset();
    }

    return (
        <Box maxWidth={ SizesConstants.debtorInvoiceForm }>
            <FormControlContainer
                registerFunc={ register }
                columns={ ResponsiveConstants.mobile1ColumnDesktop3Column }
                validations={ formValidations }
                errors={ errors }>

                <SelectFormControl
                    name={ NamesConstants.numero }
                    label={ LabelsConstants.producto }
                    optionsData={ [
                        { value: 1, text: 'Producto1' },
                        { value: 2, text: 'Producto2' }
                    ] }/>

                <InputFormControl
                    name={ NamesConstants.cantidad }
                    label={ LabelsConstants.cantidad }
                    type={ InputTypes.number }
                />

                <IconButton
                    justifySelf='end'
                    width={ ResponsiveConstants.responsiveMinContentWidth }
                    size='sm'
                    aria-label='Add product'
                    icon={ <SmallAddIcon/> }
                    onClick={ handleSubmit(submitHandler) }
                />
            </FormControlContainer>
        </Box>
    )
}

