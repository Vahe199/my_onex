import React, {useState} from "react";
import "../../Styles/LogInAndOut.scss"
import {InputElement} from "../Elements/InputElenent";
import register from "../../IMAGE/register.svg"
import {AsYouType} from "libphonenumber-js";
import {SelectedInputElement} from "../Elements/SelectedInputElement";
import {useDispatch, useSelector} from "react-redux";
import {getUserSuccessesData, setRegistrationData} from "../../store/reducers/AuthReducer.js";
import {ToastContainer} from "react-toastify";
import {notifyError} from "../Utils/toast_notify.js";
export const RegisterPage = () => {
    const dispatch = useDispatch()
    const {registerData} = useSelector(state => state.auth)
    const [isValid, setIsValid]= useState(true)

    const [value, setValue] = useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        role:'Օգտագործող'
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValidEmail = registerData.filter(user => user.email === value.email)
       if(isValidEmail.length > 0){
           notifyError('Այս էլ. փոստն արդեն կա')
       }else if(!value.email || value.password.length < 4 || !value.name || !value.phone){
           setIsValid(false)
       } else {
            dispatch(setRegistrationData({id:Date.now(),...value}))
            dispatch(getUserSuccessesData({id:Date.now(),...value}))

           setValue({
               name:'',
               email:'',
               phone:'',
               password:'',
               role:'Օգտագործող'
           })
       }
    }
    return(
        <div className={'log'}>
            <ToastContainer />
            <div className={'logo'}>
                <img src={register}/>
            </div>
            <div className={'form'}>
                <h1>ԳՐԱՆՑՎԵԼ</h1>
                <h2>Միացեք օնլայն գնումներ կատարող հազարավոր օգտատերերին</h2>
                <form onSubmit={handleSubmit}>
                <InputElement type="text"  label={'Անուն'} placeholder={'Անուն'} name={'name'} isValid={isValid}
                              value={value.name} onChange={e => setValue({...value,name:e.target.value})}/>
                <InputElement type={'email'} label={'E-mail'} placeholder={'E-mail հասցե'} isValid={isValid}
                              value={value.email} onChange={e => setValue({...value,email:e.target.value})}/>
                <InputElement type={'tel'} label={'Հեռախոս'} placeholder={'+374 ** ** - ** - **'}
                              value={value.phone} isValid={isValid}
                              onChange={e => setValue({...value,phone:(new AsYouType('AR')).input(e.target.value)})}/>
                <InputElement type={'password'} label={'Գաղտնաբառ'} placeholder={'Գաղտնաբառ'} isValid={isValid}
                              value={value.password} onChange={e => setValue({...value,password:e.target.value})}/>
                   <SelectedInputElement value={value.role} onChange={e => setValue({...value,role:e.target.value})}/>
                    <button  type="submit">Գրանցվել
                        <i className="fa fa-long-arrow-right" style={{marginLeft:5}}></i>
                    </button>
                </form>
            </div>
        </div>
    )
}
