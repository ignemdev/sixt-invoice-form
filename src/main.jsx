import React from 'react'
import ReactDOM from 'react-dom/client'

import InvoiceFormApp from '@/InvoiceFormApp';

import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from '@utils/themes';
import '@assets/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={ chakraTheme }>
            <InvoiceFormApp/>
        </ChakraProvider>
    </React.StrictMode>
)
