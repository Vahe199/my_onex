import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import "./Styles/App.scss"
import {NavBar} from "./component/Lyaut/NavBar.jsx";
import {MainPage} from "./component/Main/MainPage.jsx";
import {LoginPage} from "./component/Main/LoginPage";
import {RegisterPage} from "./component/Main/RegisterPage.jsx";
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from "react-redux";
import {Account} from "./component/OrdersAdmin/Account.jsx";

function App() {
    const {isAuth} = useSelector(state => state.auth)
    return (<div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={isAuth ? <Navigate to='/account' /> :<LoginPage/>}/>
            <Route path="/registration" element={isAuth ? <Navigate to='/account' /> :<RegisterPage/>}/>
            <Route path="/account" element={!isAuth ? <Navigate to='/' /> :<Account/>}/>
        </Routes>
    </div>)
}

export default App
