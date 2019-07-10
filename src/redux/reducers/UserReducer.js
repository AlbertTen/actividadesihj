const GET_USERS_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_USERS_PENDING": return state;
        case "GET_USERS_FULFILLED": return action.payload.data;
        case "GET_USERS_REJECTED": return state;
        default: return state;
    }
};

const GET_USER_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_USER_PENDING": return state;
        case "GET_USER_FULFILLED": return action.payload.data;
        case "GET_USER_REJECTED": return state;
        default: return state;
    }
};
const UPDATE_USER_REDUCER = (state = [], action) => {
    switch(action.type){
        case "UPDATE_USER_PENDING": return state;
        case "UPDATE_USER_FULFILLED": return action.payload.data;
        case "UPDATE_USER_REJECTED": return state;
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

const DELETE_USER_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "DELETE_USER_PENDING": return { status: "Pending" };
        case "DELETE_USER_FULFILLED": return action.payload.data;
        case "DELETE_USER_REJECTED": return { status: "Error" };
        default: return state;
    }
};

export {
    GET_USER_REDUCER,
    UPDATE_USER_REDUCER,
    NEW_USER_REDUCER,
    GET_USERS_REDUCER,
    DELETE_USER_REDUCER
};