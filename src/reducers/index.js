import { combineReducers } from "redux";
import newsReducer from "./newsReducer";



const allReducers = combineReducers({
    news: newsReducer,
});

export default allReducers;