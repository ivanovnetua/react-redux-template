import { combineReducers } from "redux";
import addUsers from "./add-users";
import addMessages from "./add-messages";
import changeUser from "./change-active-user";


export default combineReducers({
    addUsers,
    addMessages,
    changeUser
});