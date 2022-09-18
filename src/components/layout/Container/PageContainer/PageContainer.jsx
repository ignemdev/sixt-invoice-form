import { Box } from '@chakra-ui/react';

export const PageContainer = () => {

    return (
        <Box flex='fit-content' p='6' as='section'>
            <Box
                shadow='sm' p='6'
                rounded='md'
                overflowY='auto'
            >
                Test
            </Box>
        </Box>
    )
}