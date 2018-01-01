const defaultState = {
    users: [
        {
            id: 1,
            avatar: 'https://s13.postimg.org/ih41k9tqr/img1.jpg',
            name: 'Vladimir',
            time: 1514840606763
        },
        {
            id: 2,
            avatar: 'https://s3.postimg.org/yf86x7z1r/img2.jpg',
            name: 'Den',
            time: 1514840606763
        },
        {
            id: 3,
            avatar: 'https://s3.postimg.org/h9q4sm433/img3.jpg',
            name: 'Sarah',
            time: 1514840606763
        },
        {
            id: 4,
            avatar: 'https://s3.postimg.org/quect8isv/img4.jpg',
            name: 'Jack',
            time: 1514840606763
        },
    ]
};

export default function addUsers(state = defaultState, action) {
    if (action.type === 'ADD_NEW_USER') {
        return { ...state, users: [...state.users, action.user] }
    }

    return state
};