import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom';
import InvoiceFormApp from '@/InvoiceFormApp.jsx';
import { DashboardPage } from '@views/Home/index.js';
import { DebtorPage, InvoicesPage } from '@views/Invoices/index.js';

export const appRouting = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/' replace/>
    },
    {
        path: '/*',
        element: <InvoiceFormApp/>,
        children: [
            {
                element: <DashboardPage/>,
                index: true
            },
            {
                path: 'facturas',
                element: <InvoicesPage/>,
            },
            {
                path: 'facturas/nueva',
                element: <DebtorPage/>
            }
        ]
    }
])