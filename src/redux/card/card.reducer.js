import { createSlice } from "@reduxjs/toolkit";

//NOTE : we're using lates redux-toolkit where we don't need to create types it will automatically create it 

import { addItemToCart } from "./card.utils";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    hidden: true,  //initial state is hidden from the card action
    cardItems:[], //intitial value empty array
  },
  reducers: {
    TOGGLE_CARD_HIDDEN: (state) => {
      state.hidden = !state.hidden;  // Toggle the card dropdown menu visibility
    },
   ADD_ITEM:(state,action)=>{
    const newItem=action.payload;
      state.cardItems=addItemToCart(state.cardItems,newItem) //add and item to the card and updating with new items
    },  
  },
});

export const {TOGGLE_CARD_HIDDEN ,ADD_ITEM } =cardSlice.actions;
export default cardSlice.reducer;