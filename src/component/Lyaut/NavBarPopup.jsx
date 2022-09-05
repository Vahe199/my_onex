import React from "react";
import "../../Styles/NavBar.scss"
import logout from "../../IMAGE/logout.svg";
import orders from "../../IMAGE/orders.svg";
import addresses from "../../IMAGE/addresses.svg";
import delivery from "../../IMAGE/home-delivery.svg";
import recipients from "../../IMAGE/recipients.svg";
import setting from "../../IMAGE/settings.svg";
import locker from "../../IMAGE/locker-delivery.svg";
import exports from "../../IMAGE/export.png"
import {useDispatch} from "react-redux";
import {logOut} from "../../store/reducers/AuthReducer.js";
import {useNavigate} from "react-router-dom";
export const NavBarPopup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <div className={'popup'}>
            <div className={'pop'}>
               <span onClick={()=>navigate('/account')}> <img src={orders}/>Պատվերներ </span>
               <span> <img src={addresses}/> Հասցեներ </span>
               <span> <img src={recipients}/>Ստացողներ </span>
               <span> <img src={delivery}/>Առաքում տուն </span>
               <span><img src={locker}/>Առաքում լոքեր </span>
               <span> <img src={exports}/>Արտահանում </span>
               <span><img src={setting}/>Կարգավորումներ </span>
            </div>
            <span onClick={handleLogOut}><img src={logout}/>Ելք</span>
        </div>
    )
}
