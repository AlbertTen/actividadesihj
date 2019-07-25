import axios from 'axios';

const BASE_URL = "http://" + window.location.hostname + ":8110";

const GET_ACTIVIDADES_ACTION = () => {
    return {
        type: "GET_ACTIVIDADES",
        payload: axios.get(BASE_URL + '/getActividades')
    };
}
const GET_ACTIVIDAD_ACTION = (id) => {
    return {
        type: "GET_ACTIVIDAD",
        payload: axios.get(BASE_URL + '/getActividad/' + id)
    };
}
//Add Actividades
const NEW_ACTIVIDAD_ACTION = (dia,hora,lugar,folio,area,numAsis,calle1,calle2,callePost,numExt,letraNumExt,numInt,letraNumInt,cp,coordenadas) => {
return {
    type: "NEW_ACTIVIDAD",
    payload: axios({
        method: 'post',
        url: BASE_URL + '/actividad/add',
        data: {
            dia,hora,lugar,folio,area,numAsis,calle1,calle2,callePost,numExt,letraNumExt,numInt,letraNumInt,cp,coordenadas
        },
        config: {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    })
};
}

//Update Actividades
const UPDATE_ACTIVIDAD_ACTION = (id, dia,hora,lugar,folio,area,numAsis,calle1,calle2,callePost,numExt,letraNumExt,numInt,letraNumInt,cp,coordenadas) => {
    return {
        type: "UPDATE_ACTIVIDAD",
        payload: axios({
            method: 'put',
            url: BASE_URL + '/actividad/edit/' + id,
            data: {
                dia,hora,lugar,folio,area,numAsis,calle1,calle2,callePost,numExt,letraNumExt,numInt,letraNumInt,cp,coordenadas
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
    GET_ACTIVIDAD_ACTION,
    UPDATE_ACTIVIDAD_ACTION,
    NEW_ACTIVIDAD_ACTION,
    DELETE_ACTIVIDAD_ACTION
};
