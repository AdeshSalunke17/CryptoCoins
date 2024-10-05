import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { newsApi } from './rtkservices/newsservice';
import { Provider } from 'react-redux';
import { store } from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ApiProvider api={newsApi}>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    // </ApiProvider>
);


