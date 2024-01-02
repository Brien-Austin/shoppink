import { createSlice } from "@reduxjs/toolkit";

interface navState{
    selected : string,
}

const initialState :navState={
    selected : "",
}

const navSlice = createSlice({
    name : 'navigation',
    initialState,
    reducers:{
        selectOption : (state,action)=>{
            state.selected = action.payload
        }


    }
    
})

export const {selectOption} = navSlice.actions;
export default navSlice.reducer;

