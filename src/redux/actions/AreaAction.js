import axios from 'axios';

const BASE_URL = "http://" + window.location.hostname + ":8110";

const GET_AREAS_ACTION = () => {
    return {
        type: "GET_AREAS",
        payload: axios.get(BASE_URL + '/getAreas')
    };
}

//Add AREAS
const NEW_AREA_ACTION = (name, descripcion, telefono) => {
return {
    type: "NEW_AREA",
    payload: axios({
        method: 'post',
        url: BASE_URL + '/area/add',
        data: {
            name, descripcion, telefono
        },
        config: {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    })
};
}

export{
    GET_AREAS_ACTION,
    NEW_AREA_ACTION
};