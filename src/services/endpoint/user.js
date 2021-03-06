import axios from 'axios';
import {setUser} from '../../redux/action';
import store from '../../redux/store';
import {apiPrivate} from '../Api/webApi';

export const getProfileServices = async (onFinished = null, onError) => {
  try {
    const {data} = await apiPrivate().get('/profile');
    store.dispatch(setUser(data.data));
    console.log(data);
  } catch (error) {
    console.log('error get profile');
    console.log(error.response);
    onError(error);
  } finally {
    onFinished ? onFinished() : null;
  }
};

export const deleteAccountServices = () => {
  return apiPrivate().delete('/profile');
};
