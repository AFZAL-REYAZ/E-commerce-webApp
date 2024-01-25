import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../Components/Items";

const initialState={
    cart:[],
    itemss:Items,
    count:0,
};

export const CatrSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addTooCart:(state,action)=>{
            state.cart.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload);
        },
        increaseCount:(state,action)=>{
            state.count=action.payload
        }
    },
});

export default CatrSlice.reducer;
export const{addTooCart,removeItem,increaseCount}=CatrSlice.actions;