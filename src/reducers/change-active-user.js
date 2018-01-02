import { defaultState } from './add-users';

const defaultActiveUser = {activeUser: defaultState.users[0]};

export default function changeUser(state = defaultActiveUser, action) {
    if (action.type === 'CHANGE_USER') {
        return { ...state, activeUser: action.activeUser }
    }

    return state
};