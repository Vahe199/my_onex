import {isValidPhoneNumber} from "libphonenumber-js";

export const validateInput = (type,setErr,value) => {

    if (value.length === 0) {
        setErr('դաշտը չի կարող դատարկ լինե')
        return
    }

    switch (type) {
        case 'email':
            if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
                setErr('անվավեր էլփոստի հասցե')
            } else {
                setErr('')
            }

            break

        case 'tel':
            if (value === '+374') {
                setErr('անվավեր հեռախոսահամար')
                break
            }

            if (!isValidPhoneNumber(value, 'AR')) {
                setErr('անվավեր հեռախոսահամար')
            } else {
                setErr('')
            }
            break

        case 'password':
            if (value.length < 4) {
                setErr('գաղտնաբառը պետք է լինի առնվազն 4 նիշ')
            } else {
                setErr('')
            }
            break


    }
}
