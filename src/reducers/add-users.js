const defaultState = {
    users: [
        {
            id: 1,
            name: 'Vladimir',
        },
        {
            id: 2,
            name: 'Den',
        },
        {
            id: 3,
            name: 'Sarah',
        },
        {
            id: 4,
            name: 'Jack',
        },
    ]
};

export default function addUsers(state = defaultState, action) {
    if (action.type === 'ADD_NEW_USER') {
        return { ...state, users: [...state.users, action.user] }
    }

    return state
};