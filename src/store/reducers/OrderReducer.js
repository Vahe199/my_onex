import {createSlice} from "@reduxjs/toolkit"


const initialState = {
   order:[],
    load: false,
    success:false,
    error: false,
    message:''
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        reset(state) {
           return initialState
        },
        setOrderData(state,action){
            state.order.push(action.payload)
            state.success = true
        },
        deletedOrderData(state,action){
             state.order =  state.order.filter((arrow) => arrow.orderId !== action.payload);
            debugger
            // state.success = true
        },


    },
    extraReducers: {}

})

export const {reset,setOrderData,deletedOrderData} = orderSlice.actions


export default orderSlice.reducer
