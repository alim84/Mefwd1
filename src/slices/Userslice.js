import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : Alim,
};

export const Userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginInfo: (state, action) => {
      state.value=action.payload;
    },
  },
});

export const { userLoginInfo } = Userslice.actions;

export default Userslice.reducer;
