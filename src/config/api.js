'use strict';
import { apiUrl } from './apiUrl';


export default {
  LoginAuth: {
    login: function (data) {
      console.log('Login api request**',data);
      let url = `${apiUrl}/users/commonlogin.json`,
          opt = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };
      return fetch(url, opt);
    }
  },
}
