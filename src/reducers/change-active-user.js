export default function changeUser(state = 0, action) {
    console.log(action);
    if (action.type === 'CHANGE_USER') {
        return { ...state, activeUser: action.activeUser }
    }

    return state
};