import { createSlice } from "@reduxjs/toolkit";
const initialState={
    "coin_price_json":{},
    "invested_amount":0,
    "name":" ",
    "sum_percentage":" ",
    "total_amount":" ",
    "followers":0,
    "following":0,
}
const viewSlice=createSlice({
    name:"view",
    initialState,
    reducers:{
        storeview:(state,action)=>{
            state.coin_price_json=action.payload.coin_price_json;
            state.invested_amount=action.payload.invested_amount;
            state.name=action.payload.name;
            state.sum_percentage=action.payload.sum_percentage;
            state.total_amount=action.payload.total_amount;
            state.followers=action.payload.followers;
            state.following=action.payload.following;
        }
    }
})
export {viewSlice}
export const {storeview}=viewSlice.actions
export default viewSlice.reducer