const GET_AREAS_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_AREAS_PENDING": return state;
        case "GET_AREAS_FULFILLED": return action.payload.data;
        case "GET_AREAS_REJECTED": return state;
        default: return state;
    }
};

const NEW_AREA_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "NEW_AREA_PENDING": return { status: "Pending" };
        case "NEW_AREA_FULFILLED": return action.payload.data;
        case "NEW_AREA_REJECTED": return { status: "Error" };
        default: return state;
    }
};

const DELETE_AREA_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "DELETE_AREA_PENDING": return { status: "Pending" };
        case "DELETE_AREA_FULFILLED": return action.payload.data;
        case "DELETE_AREA_REJECTED": return { status: "Error" };
        default: return state;
    }
};

export {
    NEW_AREA_REDUCER,
    GET_AREAS_REDUCER,
    DELETE_AREA_REDUCER
};