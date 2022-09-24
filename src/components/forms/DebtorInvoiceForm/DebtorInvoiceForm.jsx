import { Button, FormControl, FormHelperText, FormLabel, Input, SimpleGrid } from '@chakra-ui/react';

export const DebtorInvoiceForm = ( { onSubmit } ) => {

    const onSubmitHandler = ( e ) => {
        console.log('form y ahora step');
        onSubmit(e);
    }

    return (
        <form onSubmit={ onSubmitHandler }>
            <SimpleGrid columns={ [ 1, null, 3 ] } spacing={ 10 }>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email'/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email'/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email'/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email'/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <Button type={ 'submit' }>Submit</Button>
            </SimpleGrid>
        </form>
    )
}