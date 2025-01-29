import { createSlice } from "@reduxjs/toolkit";


const requestSlice = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        addRequest: (state, action)=>{
            return action.payload
        },
        removeRequest: (state, action)=>{
            const newArr = state.filter(request => request._id != action.payload) // This will remove the accepted or rejected request from the request store on the base of id
            return newArr;
        }
    }
})


export const {addRequest, removeRequest} = requestSlice.actions
export default requestSlice.reducer;