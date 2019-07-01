import axios from 'axios';

const BASE_URL = "http://" + window.location.hostname + ":8110";

const GET_USERS_ACTION = () => {
    return {
        type: "GET_USERS",
        payload: axios.get(BASE_URL + '/getUsers')
    };
}

//Add Users
const NEW_USER_ACTION = (name,password,area,level, active, fechaReg) => {
return {
    type: "NEW_USER",
    payload: axios({
        method: 'post',
        url: BASE_URL + 'user/signup',
        data: {
            name,password,area,level,active, fechaReg
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
    GET_USERS_ACTION,
    NEW_USER_ACTION
};
