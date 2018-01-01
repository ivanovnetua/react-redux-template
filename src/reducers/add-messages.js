const defaultState = {
    messages: [
        {
            id: 1,
            sender: 'Vladimir',
            text: 'hello!'
        },
        {
            id: 2,
            sender: 'Den',
            text: 'ola!'
        },
        {
            id: 3,
            sender: 'Sarah',
            text: 'salut!'
        },
        {
            id: 4,
            sender: 'Jack',
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