import { createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import {
    GET_USERS_REDUCER,
    GET_USER_REDUCER,
    UPDATE_USER_REDUCER,
    NEW_USER_REDUCER,
    DELETE_USER_REDUCER
} from '../reducers/UserReducer';

import {
    GET_AREAS_REDUCER,
    GET_AREA_REDUCER,
    UPDATE_AREA_REDUCER,
    NEW_AREA_REDUCER,
    DELETE_AREA_REDUCER
} from '../reducers/AreaReducer';

import {
    GET_ACTIVIDADES_REDUCER,
    GET_ACTIVIDAD_REDUCER,
    UPDATE_ACTIVIDAD_REDUCER,
    NEW_ACTIVIDAD_REDUCER,
    DELETE_ACTIVIDAD_REDUCER
} from '../reducers/ActividadReducer';

import {
    GET_BENEFICIARIOS_REDUCER,
    GET_BENEFICIARIO_REDUCER,
    NEW_BENEFICIARIO_REDUCER,
    DELETE_BENEFICIARIO_REDUCER,
    UPDATE_BENEFICIARIO_REDUCER
} from '../reducers/BeneficiarioReducer';

const CATALOGO = combineReducers({
    //Usuarios
    stateUsers: GET_USERS_REDUCER,
    stateUser: GET_USER_REDUCER,
    responseNewUser: NEW_USER_REDUCER,
    responseUpdateUser: UPDATE_USER_REDUCER,
    responseDeleteUser: DELETE_USER_REDUCER,

    //Áreas
    stateAreas: GET_AREAS_REDUCER,
    stateArea: GET_AREA_REDUCER,
    responseUpdateArea: UPDATE_AREA_REDUCER,
    responseNewArea: NEW_AREA_REDUCER,
    responseDeleteArea: DELETE_AREA_REDUCER,

    //Actividades
    stateActividades: GET_ACTIVIDADES_REDUCER,
    stateActividad: GET_ACTIVIDAD_REDUCER,
    responseUpdateActividad: UPDATE_ACTIVIDAD_REDUCER,
    responseNewActividad: NEW_ACTIVIDAD_REDUCER, 
    responseDeleteActividad: DELETE_ACTIVIDAD_REDUCER, 

    //Beneficiarios
    stateBeneficiarios: GET_BENEFICIARIOS_REDUCER,
    stateBeneficiario: GET_BENEFICIARIO_REDUCER,
    responseNewBeneficiario: NEW_BENEFICIARIO_REDUCER,
    responseUpdateBeneficiario: UPDATE_BENEFICIARIO_REDUCER,
    responseDeleteBeneficiario: DELETE_BENEFICIARIO_REDUCER

});

const Store = createStore(CATALOGO, applyMiddleware(promiseMiddleware));

export default Store;