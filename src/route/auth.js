import { AsyncStorage } from 'react-native';

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
      AsyncStorage.getItem('token').then((token) => {
           if(token){
             resolve(token);
           }else{
             resolve('');
           }
       });
  });
};
