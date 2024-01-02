import { createSlice } from "@reduxjs/toolkit";

interface categoryState{
    selectedCategory : string,
}

const initialState :categoryState={
    selectedCategory : "",
}

const categorySlice = createSlice({
    name : 'navigation',
    initialState,
    reducers:{
        selectCategory : (state,action)=>{
            state.selectedCategory = action.payload
        }


    }
    
})

export const {selectCategory} = categorySlice.actions;
export default categorySlice.reducer;

