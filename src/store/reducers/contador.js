import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
  name: "contador",
  initialState: 0,
  reducers: {
    incrementar: (state) => {
      console.log(`contador:`, state);
      return state+1;
    },
  },
});

export const { incrementar } = contadorSlice.actions;
export default contadorSlice.reducer;
