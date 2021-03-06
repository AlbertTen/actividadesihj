import axios from 'axios';

const BASE_URL = "http://" + window.location.hostname + ":8111";

const GET_BENEFICIARIOS_ACTION = () => {
    return {
        type: "GET_BENEFICIARIOS",
        payload: axios.get(BASE_URL + '/getBeneficiarios')
    };
}

const GET_BENEFICIARIO_ACTION = (id) => {
    return {
        type: "GET_BENEFICIARIO",
        payload: axios.get(BASE_URL + '/getBeneficiario/' + id)
    };
}

//Add Beneficiarios
const NEW_BENEFICIARIO_ACTION = (nombre,app,apm,edad,sexo,telefono,email,curp,entidad,fechaNac,municipio,cp,colonia,calle,numExt,actividad) => {
return {
    type: "NEW_BENEFICIARIO",
    payload: axios({
        method: 'post',
        url: BASE_URL + '/beneficiario/add',
        data: {
            nombre,app,apm,edad,sexo,telefono,email,curp,entidad,fechaNac,municipio,cp,colonia,calle,numExt,actividad
        },
        config: {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    })
};
}

//Update Beneficiarios
const UPDATE_BENEFICIARIO_ACTION = (id, nombre,app,apm,edad,sexo,telefono,email,curp,entidad,fechaNac,municipio,cp,colonia,calle,numExt) => {
    return {
        type: "UPDATE_BENEFICIARIO",
        payload: axios({
            method: 'put',
            url: BASE_URL + '/beneficiario/edit/' + id,
            data: {
                nombre,app,apm,edad,sexo,telefono,email,curp,entidad,fechaNac,municipio,cp,colonia,calle,numExt
            },
            config: {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        })
    };
    }

const DELETE_BENEFICIARIO_ACTION = (id) => {
    return{
        type: "DELETE_BENEFICIARIO", 
        payload: axios.get(BASE_URL + '/beneficiario/delete/' + id)
    };
}

export{
    GET_BENEFICIARIOS_ACTION,
    GET_BENEFICIARIO_ACTION,
    UPDATE_BENEFICIARIO_ACTION,
    NEW_BENEFICIARIO_ACTION,
    DELETE_BENEFICIARIO_ACTION
};
