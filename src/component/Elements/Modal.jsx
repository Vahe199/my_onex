import React, {useState} from "react";
import "../../Styles/Modal.scss"
import russia from "../../IMAGE/russia.svg"
import use from "../../IMAGE/usa.svg"
import uk from "../../IMAGE/uk.svg"
import china from "../../IMAGE/china.svg"
import uae from "../../IMAGE/uae.svg"
import {SelectedInputElement} from "./SelectedInputElement";
import {InputElement} from "./InputElenent";
import {useDispatch, useSelector} from "react-redux";
import {convertBase64} from "../Utils/base64.js";
import {setOrderData} from "../../store/reducers/OrderReducer.js";
import {ToastContainer} from "react-toastify";
import {notifyError} from "../Utils/toast_notify.js";


const arrRadio = [{url:use,value:"use"},{url:russia,value:"russia"},{url:uk,value:"uk"},{url:china,value:"china"},{url:uae,value:"uae"},]
const currency = [{val:"USD",label:'$ USD'},{val:"GBP",label:'£ GBP'},{val:"EUR",label:'€ EUR'},{val:"RUB",label:'₽ RUB'},{val:"CNY",label:'¥ CNY'},{val:"د.إ AED",label:'د.إ AED'}]



export const Modal = () => {
    const dispatch = useDispatch()
const {registerData, user} = useSelector(state => state.auth)

    const filterUsers = registerData?.filter(item => item.email !== user.email)
    const selectedData = [user,...filterUsers]?.map( user =>({
        val:user?.name + " " +user?.id,
        label:user?.name + " " +user?.id
    }))
    const [isValid, setIsValid] = useState('')
    const [order,setOrder] = useState({
        country:'use',
        transport:'Օդային',
        user:user?.name + " " +user?.id,
        tracking:'',
        description:'',
        value:'',
        store:'',
        currency:'',
        file:[]
    })

    const handleUploadFile = (e) => {
        const uploaded= [];
        const files = Array.prototype.slice.call(e.target.files)
        files.forEach((file)=>{
            const base64 = convertBase64(file)
            base64.then(res =>{
                uploaded.push(res);
            })
        })
        setOrder({...order,file:uploaded})
    }
const handleSubmit = () =>{
        if(!isValid){
            notifyError('Tracking համար դաշտը չի կարող դատարկ լինել !')
        }else{
            dispatch(setOrderData({userId:user.id,orderId:Date.now(),...order}))
            setOrder({
                country:'use',
                transport:'Օդային',
                user:user?.name + " " +user?.id,
                tracking:'',
                description:'',
                value:'',
                store:'',
                currency:'',
                file:[]
            })
        }
   }

    return (<>
            <ToastContainer />
    <div id="open-modal" className="modal-window">

        <div>
            <header>
                <h1>Ավելացնել պատվեր</h1>
                <a href="#" title="Close" className="modal-close">Close</a>
            </header>
            <div className={'modal-radio'}>
                {arrRadio?.map((item,i) => <span key={i} className={'radio'}>
                    <img src={item.url}/>
                     <input type={'radio'}   checked={item.value === order.country}
                            onChange={()=> {
                                setOrder({...order,country:item.value,transport:'Օդային' })
                            }}/>
                </span>)}
            </div>
            <div className={'modal-radio'}>
                <label>Առաքման եղանակ
                    <span>
                    <i className="fa fa-info-circle" ></i>
                        <div className={'info'}>Արտասահմանյան պահեստ մուտք գործելուց հետո առաքանին կուղարկվի ՀՀ ընտրված առաքման եղանակով</div>
                    </span>
                    <span style={{fontWeight:100}}>
                    <input type={'radio'}  onChange={()=>setOrder({...order,transport:'Օդային'})}
                           checked={order.transport ==='Օդային'} />
                    <i  style={{marginRight:5,fontSize:18}} className="fa fa-plane"></i>
                        Օդային
                    </span>
                    {order.country === 'use' || order.country === 'china' ? <span style={{fontWeight: 100}}>
                    <input type={'radio'} onChange={() => setOrder({...order,transport:'Ծովային'})}
                           checked={order.transport === 'Ծովային'}/>
                   <i style={{marginRight: 5, fontSize: 18}} className="fa fa-ship"></i>
                       Ծովային
                    </span>:''}
                </label>
            </div>
            <div className={'modal_form'}>
                <SelectedInputElement value={order.user} onChange={(e)=>setOrder({...order,user:e.target.value})} data={selectedData}/>
                <InputElement type={'text'} label={'Tracking համար'} value={order.tracking}
                              onChange={(e)=> {
                                  setIsValid(e.target.value)
                                  setOrder({...order, tracking: e.target.value})
                              }}
                              placeholder={"Tracking համար(մուտքագրել առանց հավելյալ նշանների)"}/>
                <div className={'currency'}>
                    <SelectedInputElement value={order.currency} onChange={(e)=>setOrder({...order,currency:e.target.value})} data={currency}/>
                    <input  value={order.value} onChange={(e)=>setOrder({...order,value:e.target.value})}
                                  placeholder={"Արժեք"}/>
                    <input value={order.store} onChange={(e)=>setOrder({...order,store:e.target.value})}
                                  placeholder={"Խանութ"}/>
                </div>
                <div style={{width:'100%'}}>
                <textarea id="story" value={order.description} onChange={(e)=>setOrder({...order,description:e.target.value})}
                          placeholder="Պատվերի նկարագրություն"
                          rows="3" cols="33"/>
                </div>
                <div style={{width:'100%'}}>
                    <label className="custom-file-upload">
                        <input type="file" multiple
                               accept='application/pdf, image/*' value={order.file}
                                onChange={handleUploadFile}
                        />
                        Ինվոյս<i className="fa fa-file" style={{margin:'4px 0 4px 10px'}}></i>
                    </label>
                </div>
                <div className={'btn_group'}>
                    <a href={!isValid ? "#open-modal" : "#"} className={'btn_add'} onClick={handleSubmit}>+ Ավելացնել</a>
                    <a href="#" className={'btn_clos'}>Չեղարկել</a>
                </div>
            </div>

        </div>
    </div>

</>
)
}
