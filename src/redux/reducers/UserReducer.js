const GET_USERS_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_USERS_PENDING": return state;
        case "GET_USERS_FULFILLED": return action.payload.data;
        case "GET_USERS_REJECTED": return state;
        default: return state;
    }
};

const NEW_USER_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "NEW_USER_PENDING": return { status: "Pending" };
        case "NEW_USER_FULFILLED": return action.payload.data;
        case "NEW_USER_REJECTED": return { status: "Error" };
        default: return state;
    }
};

export {
    NEW_USER_REDUCER,
    GET_USERS_REDUCER
};