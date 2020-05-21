import {all, takeLatest} from 'redux-saga/effects';
import {getDevelopers} from './actions';
import api from '../../../services/api';

function getDevelopersAround({payload}) {
  api.defaults.headers.common.Authorization = `Bearer ${payload}`;
}

export default all([
  takeLatest('GET_DEVELOPERS', getDevelopersAround)
]);
