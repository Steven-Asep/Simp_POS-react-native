import axios from 'axios';
import store from '../redux/store';

const HOST = 'https://sistempointofsales.herokuapp.com';

const apiPublic = axios.create({
  baseURL: HOST + '/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getReduxToken = () => {
  const {token} = store.getState();
  return token;
};

const apiPrivate = () => {
  return axios.create({
    baseURL: HOST + '/api/',
    headers: {
      Authorization: 'Bearer ' + getReduxToken(),
    },
  });
};

export {apiPublic, apiPrivate, HOST, getReduxToken};
