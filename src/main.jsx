import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './pages/Browse';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider
            router={createBrowserRouter([{ path: '/', Component: Browse }])}
        />
    </React.StrictMode>
);
