import axios from 'axios';

const BASE_URL = "http://" + window.location.hostname + ":8110";

const GET_BENEFICIARIOS_ACTION = () => {
    return {
        type: "GET_BENEFICIARIOS",
        payload: axios.get(BASE_URL + '/getBeneficiarios')
    };
}

//Add Beneficiarios
const NEW_BENEFICIARIO_ACTION = (nombre,app,apm,edad,sexo,telefono,email,curp,fechaNac,municipio,cp,colonia,calle,numExt) => {
return {
    type: "NEW_BENEFICIARIO",
    payload: axios({
        method: 'post',
        url: BASE_URL + '/beneficiario/add',
        data: {
            nombre,app,apm,edad,sexo,telefono,email,curp,fechaNac,municipio,cp,colonia,calle,numExt
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
    NEW_BENEFICIARIO_ACTION,
    DELETE_BENEFICIARIO_ACTION
};
