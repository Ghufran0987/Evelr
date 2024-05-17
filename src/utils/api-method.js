import { api } from "./api-config";
import { URLs } from "./constant";

export const auth={

    logIn:async({body})=>{
        const response=await api.post(`${URLs.SIGN_IN}`,body)
        return response;
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