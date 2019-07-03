import { createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import {
    GET_USERS_REDUCER,
    NEW_USER_REDUCER,
    DELETE_USER_REDUCER
} from '../reducers/UserReducer';

import {
    GET_AREAS_REDUCER,
    NEW_AREA_REDUCER,
    DELETE_AREA_REDUCER
} from '../reducers/AreaReducer';

import {
    GET_ACTIVIDADES_REDUCER,
    NEW_ACTIVIDAD_REDUCER,
    DELETE_ACTIVIDAD_REDUCER
} from '../reducers/ActividadReducer';

import {
    GET_BENEFICIARIOS_REDUCER,
    NEW_BENEFICIARIO_REDUCER,
    DELETE_BENEFICIARIO_REDUCER
} from '../reducers/BeneficiarioReducer';

const CATALOGO = combineReducers({
    stateUsers: GET_USERS_REDUCER,
    responseNewUser: NEW_USER_REDUCER,
    stateAreas: GET_AREAS_REDUCER,
    responseNewArea: NEW_AREA_REDUCER,
    stateActividades: GET_ACTIVIDADES_REDUCER,
    responseNewActividad: NEW_ACTIVIDAD_REDUCER,  
    stateBeneficiarios: GET_BENEFICIARIOS_REDUCER,
    responseNewBeneficiario: NEW_BENEFICIARIO_REDUCER,
    responseDeleteUser: DELETE_USER_REDUCER,
    responseDeleteBeneficiario: DELETE_BENEFICIARIO_REDUCER,
    responseDeleteArea: DELETE_AREA_REDUCER,
    responseDeleteActividad: DELETE_ACTIVIDAD_REDUCER

});

const Store = createStore(CATALOGO, applyMiddleware(promiseMiddleware));

export default Store;