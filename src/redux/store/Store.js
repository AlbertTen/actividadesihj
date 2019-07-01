import { createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import {
    GET_USERS_REDUCER,
    NEW_USER_REDUCER
} from '../reducers/UserReducer';

import {
    GET_AREAS_REDUCER,
    NEW_AREA_REDUCER
} from '../reducers/AreaReducer';

const CATALOGO = combineReducers({
    stateUsers: GET_USERS_REDUCER,
    responseNewUser: NEW_USER_REDUCER,

    stateAreas: GET_AREAS_REDUCER,
    responseNewArea: NEW_AREA_REDUCER
});

const Store = createStore(CATALOGO, applyMiddleware(promiseMiddleware));

export default Store;