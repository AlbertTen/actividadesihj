const GET_BENEFICIARIOS_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_BENEFICIARIOS_PENDING": return state;
        case "GET_BENEFICIARIOS_FULFILLED": return action.payload.data;
        case "GET_BENEFICIARIOS_REJECTED": return state;
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

export {
    NEW_BENEFICIARIO_REDUCER,
    GET_BENEFICIARIOS_REDUCER
};