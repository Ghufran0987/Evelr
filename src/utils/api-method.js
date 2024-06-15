import { api } from "./api-config";
import { URLs } from "./constant";

export const auth={

    logIn:async({body})=>{
        const response=await api.post(`${URLs.SIGN_IN}`,body)
        return response;
    },
    signUp:async({body})=>{
      const reqeust_body={...body,device_type:"web"}
      const response=await api.post(`${URLs.SIGN_UP}`,reqeust_body);
      return response;
    },
    getUser:async()=>{
      const response=await api.get(`${URLs.USER_INFO}`)
      return response.data
    }
}
export const post = {
    getAll: async (category_id = null) => {
      const queryParam = category_id ? `?category_id=${category_id}` : '';
      const response = await api.get(`${URLs.GET_POST}${queryParam}`);
      return response;
    },
    getById: async ({ id }) => {
      const response = await api.get(`${URLs.GET_POST}/${id}`);
      return response.data;
    },
  };
  
export const category={
    getAll:async()=>{
        const response=await api.get(`${URLs.GET_CATEGORY}`)
        return response.data;
    }
}

export const currencies={
  getAll:async()=>{

    const response=await api.get(`${URLs.Get_Currency}`)
    console.log("Currency",response)
    return response;
  }
}
export const country={
  getAll:async()=>{
    const response=await api.get(`${URLs.GET_COUNTRY}`)
    return response.data
  }
}