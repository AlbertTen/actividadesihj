const GET_BENEFICIARIOS_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_BENEFICIARIOS_PENDING": return state;
        case "GET_BENEFICIARIOS_FULFILLED": return action.payload.data;
        case "GET_BENEFICIARIOS_REJECTED": return state;
        default: return state;
    }
};

const GET_BENEFICIARIO_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_BENEFICIARIO_PENDING": return state;
        case "GET_BENEFICIARIO_FULFILLED": return action.payload.data;
        case "GET_BENEFICIARIO_REJECTED": return state;
        default: return state;
    }
};

const UPDATE_BENEFICIARIO_REDUCER = (state = [], action) => {
    switch(action.type){
        case "UPDATE_BENEFICIARIO_PENDING": return state;
        case "UPDATE_BENEFICIARIO_FULFILLED": return action.payload.data;
        case "UPDATE_BENEFICIARIO_REJECTED": return state;
        default: return state;
    }
};

const NEW_BENEFICIARIO_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "NEW_BENEFICIARIO_PENDING": return { status: "Pending" };
        case "NEW_BENEFICIARIO_FULFILLED": return action.payload.data;
        case "NEW_BENEFICIARIO_REJECTED": return { status: "Error" };
        default: return state;
    }
};

const DELETE_BENEFICIARIO_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "DELETE_BENEFICIARIO_PENDING": return { status: "Pending" };
        case "DELETE_BENEFICIARIO_FULFILLED": return action.payload.data;
        case "DELETE_BENEFICIARIO_REJECTED": return { status: "Error" };
        default: return state;
    }
};



export {
    NEW_BENEFICIARIO_REDUCER,
    GET_BENEFICIARIOS_REDUCER,
    GET_BENEFICIARIO_REDUCER,
    UPDATE_BENEFICIARIO_REDUCER,
    DELETE_BENEFICIARIO_REDUCER
};