import axios from 'axios';

const BASE_URL = "http://" + window.location.hostname + ":8111";

const GET_USERS_ACTION = () => {
    return {
        type: "GET_USERS",
        payload: axios.get(BASE_URL + '/getUsers')
    };
}

const GET_USER_ACTION = (id) => {
    return {
        type: "GET_USER",
        payload: axios.get(BASE_URL + '/getUser/'+ id)
    };
}

//Add Users
const NEW_USER_ACTION = (name,email,password,area,level, active) => {
return {
    type: "NEW_USER",
    payload: axios({
        method: 'post',
        url: BASE_URL + '/users/signup',
        data: {
            name,email,password,area,level,active
        },
        config: {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    })
};
}

const UPDATE_USER_ACTION = (id, name,email,password,area,level, active) => {
    return {
        type: "UPDATE_USER",
        payload: axios({
            method: 'put',
            url: BASE_URL + '/user/edit/' + id,
            data: {
                name,email,password,area,level,active
            },
            config: {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        })
    };
    }


const DELETE_USER_ACTION = (id) => {
    return{
        type: "DELETE_USER",
        payload: axios.get(BASE_URL +'/user/delete/'+ id)
    };
}

export{
    GET_USERS_ACTION,
    GET_USER_ACTION,
    UPDATE_USER_ACTION,
    NEW_USER_ACTION,
    DELETE_USER_ACTION
};
