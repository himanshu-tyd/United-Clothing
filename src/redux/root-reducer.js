import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cardReducer from "./card/card-reducer";

const rootReducer=combineReducers({
    user:userReducer,
    card:cardReducer,
    
})

export default rootReducer
