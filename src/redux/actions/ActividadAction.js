import axios from 'axios';

const BASE_URL = "http://" + window.location.hostname + ":8110";

const GET_ACTIVIDADES_ACTION = () => {
    return {
        type: "GET_ACTIVIDADES",
        payload: axios.get(BASE_URL + '/getActividades')
    };
}

//Add Actividades
const NEW_ACTIVIDAD_ACTION = (dia,hora,lugar,folio,area,numAsis,nCambios) => {
return {
    type: "NEW_ACTIVIDADES",
    payload: axios({
        method: 'post',
        url: BASE_URL + 'actividad/add',
        data: {
            dia,hora,lugar,folio,area,numAsis,nCambios
        },
        config: {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    })
};
}

const DELETE_ACTIVIDAD_ACTION = (id) => {
    return{
        type: "DELETE_ACTIVIDAD",
        payload: axios.get(BASE_URL +'/actividad/delete/'+ id)
    };
}

export{
    GET_ACTIVIDADES_ACTION,
    NEW_ACTIVIDAD_ACTION,
    DELETE_ACTIVIDAD_ACTION
};
