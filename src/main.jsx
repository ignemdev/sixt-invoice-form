import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { appRouting } from '@utils/routing';

import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from '@utils/themes';
import '@assets/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={ chakraTheme }>
            <RouterProvider router={ appRouting }/>
        </ChakraProvider>
    </React.StrictMode>
)
