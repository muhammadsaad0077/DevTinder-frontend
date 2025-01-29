import { createSlice } from "@reduxjs/toolkit";


const connectionSlice = createSlice({
    name: "connection",
    initialState: null,
    reducers: {
        addConnections: (state, action) =>{
            return action.payload;
        },
        addOneConnection: (state, action) =>{
            const newUser = action.payload;
            const isExistUser = state?.some((user) => user._id.toString() === newUser._id.toString());
            if(!isExistUser){
                state.push(newUser)
            }
        },
        removeConnections: (state, action) =>{
            return null;
        }
    }
})

export const {addConnections, removeConnections, addOneConnection} = connectionSlice.actions;
export default connectionSlice.reducer;