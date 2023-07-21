import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
  name: "card",
  initialState: {
    hidden: true,
  },
  reducers: {
    toggleCardHidden: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const {toggleCardHidden} = cardSlice.actions;
export default cardSlice.reducer;