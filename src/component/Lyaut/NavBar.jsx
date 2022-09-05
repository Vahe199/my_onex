import React from 'react';
import {useNavigate} from "react-router-dom";
import "../../Styles/NavBar.scss"
import logo from "../../IMAGE/onex-logo.svg"
import search from "../../IMAGE/search_track.svg"
import calculator from "../../IMAGE/calculator.svg"
import {useSelector} from "react-redux";
import {NavBarPopup} from "./NavBarPopup.jsx";

export function NavBar() {
    const navigate = useNavigate();
    const {isAuth, user} = useSelector(state => state.auth)
    const {order} = useSelector(state => state.order)
    const orderCount = [...order].filter( ord =>ord.userId === user.id)

    return (
        <nav className={'navbar'}>
            {!isAuth && <div className={'topBar'}>
                <div className={'links'}>
                    <a href={'/'}> Հետադարձ կապ | </a>
                    <a href={'/about'}> Պայմաններ | </a>
                    <a href={'profile'}>(060) 750-350 | </a>
                    <a href={'contacts'}>Խանութներ | </a>
                    <a href={'contacts'}>Բլոգ | </a>
                    <a href={'contacts'}> Հայերեն</a>
                </div>
                <div className={'btnGroup'}>
                    <button className={'btnLog'} onClick={() => navigate('/login')}>
                        <i className="fa fa-sign-in" style={{marginRight: 10}} aria-hidden="true"></i>
                        Մուտք
                    </button>
                    <button className={'btnReg'} onClick={() => navigate('/registration')}>
                        <i className="fa fa-user-plus" style={{marginRight: 10}}></i>
                        Գրանցվել
                    </button>
                </div>
            </div>}
            <div className={'bottomBar'}>
                <img src={logo} onClick={()=>navigate('/')}/>
                {isAuth ?
                    <div className={'links'}>
                        <a><img className={'img'} src={search}/></a>
                        {user?.role === "Օգտագործող" && <p>Պատվեր ({orderCount?.length})<span className="caret"/></p>}
                        <h1>{user?.name + " " + user?.id}<span className="caret"/>
                            <NavBarPopup />
                        </h1>

                    </div>
                    :<div className={'links'}>
                    <a href={'/'}>Ներմուծում</a>
                    <a href={'/about'}>Արտահանում </a>
                    <a href={'profile'}>Կորպորատիվ</a>
                    <a href={'contacts'}>Մեծածախի հարցում</a>
                    <a href={'contacts'}> SMART Լուծումներ</a>
                    <img src={calculator}/>
                    <img src={search}/>
                </div>}
            </div>
        </nav>
    )
}
