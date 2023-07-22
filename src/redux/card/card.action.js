import { TOGGLE_CARD_HIDDEN,ADD_ITEM } from "./card.reducer";

export const toggleCardHidden=()=>({
    type: TOGGLE_CARD_HIDDEN
})
export const addItem=(item)=>({
    type:ADD_ITEM,
    payload:item
})