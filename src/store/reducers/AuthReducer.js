import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    isAuth:false,
    registerData: [],
    user:{},
    load: false,
    success:false,
    error: false,
    message:''
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset(state) {
           return initialState
        },
        setRegistrationData(state,action){
            state.registerData.push(action.payload)
        },
        getUserSuccessesData(state,action){
            state.user = action.payload
            state.isAuth = true
        },
        logOut(state){
            state.user = {}
            state.isAuth = false
        }

    },
    extraReducers: {}

})

export const {reset,setRegistrationData,getUserSuccessesData,logOut} = authSlice.actions


export default authSlice.reducer
