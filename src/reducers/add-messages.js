const defaultState = {
    messages: [
        {
            id: 1,
            senderId: 1,
            receiverId: 0,
            text: 'hello!',
        },
        {
            id: 2,
            senderId: 2,
            receiverId: 0,
            text: 'ola!'
        },
        {
            id: 3,
            senderId: 3,
            receiverId: 0,
            text: 'salut!'
        },
        {
            id: 4,
            senderId: 4,
            receiverId: 0,
            text: 'yo!'
        },
        {
            id: 5,
            senderId: 0,
            receiverId: 1,
            text: 'my message!'
        },
    ]
};

export default function addMessages(state = defaultState, action) {
    console.log(action);
    if (action.type === 'ADD_NEW_MESSAGE') {
        return { ...state, messages: [...state.messages, action.message] }
    }

    return state
};