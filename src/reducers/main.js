const defaultState = {
    users: [
        {
            id: 1,
            name: 'Vladimir',
            position: 'front-end'
        },
        {
            id: 2,
            name: 'Den',
            position: 'back-end'
        },
        {
            id: 3,
            name: 'Sarah',
            position: 'QA tester'
        },
        {
            id: 4,
            name: 'Jack',
            position: 'Mobile developer'
        },
    ]
};

export default function AppReducer(state = defaultState, action) {
    return state
};