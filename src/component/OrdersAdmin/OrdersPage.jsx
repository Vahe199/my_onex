import React, {useState} from "react";
import "../../Styles/OrdersStyle.scss"
import barcode from "../../IMAGE/bar-code-gray.svg"
import no_parcel from "../../IMAGE/no-parcel_icon.svg"
import {Modal} from "../Elements/Modal.jsx";
let spn_style = {
    backgroundColor:"#fff",
    color:'#5dba2f'
}
export const OrdersPage = () => {
    const [tracking, setTracking] = useState(false)
    const [active, setActive] = useState(1)
    return (<>
            <div className={'order'}>
                <div className={'order_ttl'}>
                    <div className={'order_title'}>
                        <h2>ՊԱՏՎԵՐՆԵՐ</h2>
                        <a href="#open-modal">
                        <button>+</button>
                        </a>
                    </div>
                    <button className={'btn'}><img src={barcode}/>Բարկոդ</button>
                </div>
                <div className={'order_ttl'}>
                    <div className={'order_ttl'}>
                    <span className={tracking ? 'icon' : 'icon_active'} onClick={() => setTracking(false)}><i
                        className="fa fa-th g-color-primary"></i></span>
                        <span className={tracking ? 'icon_active' : 'icon'} onClick={() => setTracking(true)}><i
                            className="fa fa-list"></i></span>
                        <input placeholder="Tracking համար" className={tracking ? 'inp_search' : 'inp_hidden'}/>
                    </div>
                    <div className={'order_ttl'}>
                        <button className={'btn'}> Առաքում լոքեր
                            <div className={'modal'}>«Առաքում լոքեր» ծառայությունը պատվիրելու համար Դուք դեռևս չունեք առաքանի Հայաստանում</div>
                        </button>
                        <button className={'btn'}> Առաքում տուն
                            <div className={'modal'}>«Առաքում տուն» ծառայությունը պատվիրելու համար Դուք դեռևս չունեք առաքանի Հայաստանում</div>

                        </button>
                    </div>
                </div>
            </div>
            <div className={'order'} style={{backgroundColor: '#fff'}}>
                <div className={'alert'}>
                    Անհրաժեշտ է հաշվին ապահովել բավարար գումար Ձեր պատվերները դեպի ՀայՓոստի բաժանմունք առաքելու համար:
                    <a style={{color: '#5dba2f', marginLeft: 2}}>Համալրել հաշիվը</a>
                </div>
                <div style={{paddingTop:10}}>
                    <ul>
                        <li onClick={()=>setActive(1)} style={active ===1 ?{backgroundColor: "#5dba2f" }:{}}>Պատվիրված է <span style={active ===1 ? spn_style : {}}>0</span></li>
                        <li onClick={()=>setActive(2)} style={active ===2 ?{backgroundColor: "#5dba2f" }:{}}>Հասել է պահեստ <span style={active ===2 ? spn_style : {}}>0</span></li>
                        <li onClick={()=>setActive(3)} style={active ===3 ?{backgroundColor: "#5dba2f" }:{}}>Ճանապարհին է <span style={active ===3 ? spn_style : {}}>0</span> </li>
                        <li onClick={()=>setActive(4)} style={active ===4 ?{backgroundColor: "#5dba2f" }:{}}>Հայաստանում է <span style={active ===4 ? spn_style : {}}>0</span></li>
                        <li onClick={()=>setActive(5)} style={active ===5 ?{backgroundColor: "#5dba2f" }:{}}>Ընդունված է <span style={active ===5 ? spn_style : {}}>0</span></li>
                    </ul>
                </div>
                <div className={'order_ttl'} style={{justifyContent:"center",paddingTop:100}}>
                <img src={no_parcel} height={300}/>
                 </div>
            </div>
            <Modal/>
        </>
    )
}
