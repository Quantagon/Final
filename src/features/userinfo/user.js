import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username:"salmanpary",
  email: "salmanpary@gmail.com",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeemail: (state, action) => {
      state.email = action.payload;
    },
    storeusername: (state, action) => {
        state.username = action.payload;
        }
  },
});
export {userSlice}
export const { storeusername, storeemail } = userSlice.actions;
export default userSlice.reducer;
