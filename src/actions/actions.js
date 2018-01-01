export const addNewMessageAction = (message) => {
    return {
        type: "ADD_NEW_MESSAGE", 
        message: message
    }
};

export const addNewUserAction = (user) => { 
    return { 
        type: "ADD_NEW_USER",
        user: user 
    }
};