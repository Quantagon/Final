import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email: " ",
    followers: 0,
    friends: [],
    name: " ",
    percentage: 0,
    total_balance: 0,
    total_profit: 0,
    _id: " ",
    __v: 0
}
const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        storeinfo: (state, action) => {
            state.email = action.payload.email;
            state.followers = action.payload.followers;
            state.friends = action.payload.friends;
            state.name = action.payload.name;
            state.percentage = action.payload.percentage;
            state.total_balance = action.payload.total_balance;
            state.total_profit = action.payload.total_profit;
            state._id = action.payload._id;
            state.__v = action.payload.__v;
        }


    }
})
export { friendsSlice }
export const { storeinfo } = friendsSlice.actions;
export default friendsSlice.reducer;    
