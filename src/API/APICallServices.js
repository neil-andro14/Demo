import axios from 'axios';
import WebURL from './WebURL';

const APICallServices = {
  checkConstantValue(serverResponse) {},

  getAPIRequestService(url) {
    const response = axios.get(url);
    return response;
  },
};

export default APICallServices;
