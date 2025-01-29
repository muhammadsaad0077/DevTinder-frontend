import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state, action)=>{
            return action.payload;
        },
        removeFeed: (state, action)=>{
            const newArr = state.filter(request => request._id != action.payload);
            return newArr;
        }
    }
})

export const {addFeed, removeFeed} = feedSlice.actions;
export default feedSlice.reducer;