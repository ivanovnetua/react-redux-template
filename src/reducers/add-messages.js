const defaultState = {
    messages: [
        {
            id: 1,
            author: 'Vladimir',
            text: 'hello!',
        },
        {
            id: 2,
            author: 'Den',
            text: 'ola!'
        },
        {
            id: 3,
            author: 'Sarah',
            text: 'salut!'
        },
        {
            id: 4,
            author: 'Jack',
            text: 'yo!'
        },
    ]
};

export default function addMessages(state = defaultState, action) {
    if (action.type === 'ADD_NEW_MESSAGE') {
        return { ...state, messages: [...state.messages, action.message] }
    }

    return state
};