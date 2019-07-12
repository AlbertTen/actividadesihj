import axios from 'axios';

const BASE_URL = "http://" + window.location.hostname + ":8110";

const GET_AREAS_ACTION = () => {
    return {
        type: "GET_AREAS",
        payload: axios.get(BASE_URL + '/getAreas')
    };
}

const GET_AREA_ACTION = (id) => {
    return {
        type: "GET_AREA",
        payload: axios.get(BASE_URL + '/getArea/'+ id)
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
const UPDATE_AREA_ACTION = (id, name, descripcion, telefono, abreviacion) => {
    return {
        type: "UPDATE_AREA",
        payload: axios({
            method: 'put',
            url: BASE_URL + '/area/edit/' + id,
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
    GET_AREA_ACTION,
    UPDATE_AREA_ACTION,
    NEW_AREA_ACTION,
    DELETE_AREA_ACTION
};