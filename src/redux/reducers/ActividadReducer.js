const GET_ACTIVIDADES_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_ACTIVIDADES_PENDING": return state;
        case "GET_ACTIVIDADES_FULFILLED": return action.payload.data;
        case "GET_ACTIVIDADES_REJECTED": return state;
        default: return state;
    }
};
const GET_ACTIVIDAD_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_ACTIVIDAD_PENDING": return state;
        case "GET_ACTIVIDAD_FULFILLED": return action.payload.data;
        case "GET_ACTIVIDAD_REJECTED": return state;
        default: return state;
    }
};

const UPDATE_ACTIVIDAD_REDUCER = (state = [], action) => {
    switch(action.type){
        case "UPDATE_ACTIVIDAD_PENDING": return state;
        case "UPDATE_ACTIVIDAD_FULFILLED": return action.payload.data;
        case "UPDATE_ACTIVIDAD_REJECTED": return state;
        default: return state;
    }
};

const NEW_ACTIVIDAD_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "NEW_ACTIVIDAD_PENDING": return { status: "Pending" };
        case "NEW_ACTIVIDAD_FULFILLED": return action.payload.data;
        case "NEW_ACTIVIDAD_REJECTED": return { status: "Error" };
        default: return state;
    }
};

const DELETE_ACTIVIDAD_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "DELETE_ACTIVIDAD_PENDING": return { status: "Pending" };
        case "DELETE_ACTIVIDAD_FULFILLED": return action.payload.data;
        case "DELETE_ACTIVIDAD_REJECTED": return { status: "Error" };
        default: return state;
    }
};

export {
    NEW_ACTIVIDAD_REDUCER,
    GET_ACTIVIDAD_REDUCER,
    GET_ACTIVIDADES_REDUCER,
    UPDATE_ACTIVIDAD_REDUCER,
    DELETE_ACTIVIDAD_REDUCER
};