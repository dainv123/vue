import { AXIOS } from './http';
import { CONSTANTS } from './constants';

function getMethodType(method) {
  return process.env.NODE_ENV === 'development' ? 'get' : method;
}

export default {
  get(url, params) {
    return AXIOS.get(url, {
      params
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { err, msg: CONSTANTS.networkMsg400 };
      });
  },

  post(url, params) {
    return AXIOS({
      method: getMethodType('post'),
      url: url,
      data: params
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { err, msg: CONSTANTS.networkMsg400 };
      });
  },

  put(url, params) {
    return AXIOS({
      method: getMethodType('put'),
      url: url,
      data: params
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { err, msg: CONSTANTS.networkMsg400 };
      });
  },

  delete(url, params) {
    return AXIOS({
      method: getMethodType('delete'),
      url: url,
      data: params
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { err, msg: CONSTANTS.networkMsg400 };
      });
  }
};
