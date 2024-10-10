import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const Userslice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLoginInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLoginInfo } = Userslice.actions;

export default Userslice.reducer;
