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
    type: "NEW_BENEFICIARIOS",
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

export{
    GET_BENEFICIARIOS_ACTION,
    NEW_BENEFICIARIO_ACTION
};
