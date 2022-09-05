import React, {useState} from "react";
import "../../Styles/LogInAndOut.scss"
import {InputElement} from "../Elements/InputElenent";
import rocket from "../../IMAGE/rocket.svg"
import {useDispatch, useSelector} from "react-redux";
import {notifyError} from "../Utils/toast_notify.js";
import {ToastContainer} from "react-toastify";
import {getUserSuccessesData} from "../../store/reducers/AuthReducer.js";
export const LoginPage = () => {
    const dispatch = useDispatch()
    const {registerData} = useSelector(state => state.auth)
    const [isValid, setIsValid]= useState(true)
    const [value, setValue] = useState({
        email:'',
        password:''
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        const getUser = registerData.find(user => user.email === value.email)
        if(!value.email || value.password.length < 4) {
            setIsValid(false)
        }else if(!getUser || getUser.password !== value.password){
            notifyError('էլ. փոստը կամ գաղտնաբառը վավեր չէ !')
        }else{
            dispatch(getUserSuccessesData(getUser))
            setValue({
                email:'',
                password:''
            })
        }
    }
    return(
        <div className={'log'}>
            <ToastContainer />
            <div className={'logo'}>
                <img src={rocket}/>
            </div>
            <div className={'form'}>
                <h1>ՄՈՒՏՔ</h1>
                <h2>Մուտքագրեք Ձեր տվյալները</h2>
                <form onSubmit={handleSubmit}>
                <InputElement type={'email'} label={'E-mail'} placeholder={'E-mail հասցե'} isValid={isValid}
                              value={value.email} onChange={e => setValue({...value,email:e.target.value})}/>
                <InputElement type={'password'} label={'Գաղտնաբառ'} placeholder={'Գաղտնաբառ'} isValid={isValid}
                              value={value.password} onChange={e => setValue({...value,password:e.target.value})}/>
                    <button type={'submit'}>ՄՈՒՏՔ
                        <i className="fa fa-long-arrow-right" style={{marginLeft:5}}></i>
                    </button>
                </form>
            </div>
        </div>
    )
}
