import { combineReducers } from "redux"
import { postReducers } from "./postreducers/index"

const rootReducer=combineReducers({
    posts:postReducers
});
console.log(rootReducer);
export default rootReducer;
