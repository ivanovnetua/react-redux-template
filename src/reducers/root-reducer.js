import { combineReducers } from "redux";
import addUsers from "./add-users";
import addMessages from "./add-messages";

export default combineReducers({
    addUsers,
    addMessages
});