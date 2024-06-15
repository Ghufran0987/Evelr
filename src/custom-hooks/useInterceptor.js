import { api } from '../../src/utils/api-config';
import { store } from '../redux-store/store';
import { useSelector } from 'react-redux';
const useInterceptor = () => {
    const {token}=useSelector((state)=>state.auth)
    api.interceptors.request.use(
        (config) => {
        
          const authObj = store?.getState()?.auth;
          const token = authObj?.token;
           if (token) {
            config.headers["Authorization"] = "Bearer " + authObj?.token;
          }
          return config;
        },
        (error) => {
          return   Promise.reject(error);
        }
      );
      api.interceptors.response.use(
        (res) => {
          return res;
        },
        async (err) => {
          console.log(err)
        }
      );
};

export default useInterceptor;
