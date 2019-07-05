import axios from 'axios';

const BASE_URL = "http://" + window.location.hostname + ":8110";

const GET_AREAS_ACTION = () => {
    return {
        type: "GET_AREAS",
        payload: axios.get(BASE_URL + '/getAreas')
    };
}

//Add AREAS
const NEW_AREA_ACTION = (name, descripcion, telefono, abreviacion) => {
return {
    type: "NEW_AREA",
    payload: axios({
        method: 'post',
        url: BASE_URL + '/areas/add',
        data: {
            name, descripcion, telefono, abreviacion
        },
        config: {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    })
};
}

const DELETE_AREA_ACTION = (id) => {
    return{
        type: "DELETE_AREA",
        payload: axios.get(BASE_URL + '/area/delete/' + id)
    };
}

export{
    GET_AREAS_ACTION,
    NEW_AREA_ACTION,
    DELETE_AREA_ACTION
};