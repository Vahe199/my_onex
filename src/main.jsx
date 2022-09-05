import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import index from "./store";
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={index}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
