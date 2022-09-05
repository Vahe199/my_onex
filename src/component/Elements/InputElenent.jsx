import React, {useEffect, useState} from "react";
import {AsYouType} from "libphonenumber-js";
import "./style/InputStyles.scss"
import {validateInput} from "../Utils/input_validate.js";

export const InputElement = ({label='',isValid=true, ...props}) => {
    const [err, setErr] = useState('' )
    useEffect(()=>{
        if(!isValid && props.value?.length === 0)
        setErr('դաշտը չի կարող դատարկ լինե')
    },[isValid])

    const handlerBlur = (val) => {
        const value = props.type === 'tel' ? (new AsYouType('AR')).input(props.value) : props.value
        validateInput(props.type,setErr,value)
    }

    return (<div className={'inputWrap'}>
            <label className={err.length > 0 ? 'errorField' : 'field '}>
                <input  {...props} className={'input'}
                        onFocus={() => setErr('')}
                        onBlur={(e) => handlerBlur(e.currentTarget.value)}
                />
                <span className={'label'}>{label}</span>
            </label>
            <div className={'err'}>{err}</div>
        </div>
    )
}
