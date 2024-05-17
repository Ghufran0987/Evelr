import { api } from "./api-config";
import { URLs } from "./constant";

export const auth={

    logIn:async({body})=>{
        const response=await api.post(`${URLs.SIGN_IN}`,body)
        return response;
    }
}
export const post={
    getAll:async()=>{
        const response=await api.get(`${URLs.GET_POST}`)
        return response;
    },
    getById:async({id})=>{
        console.log(URLs.GET_POST+id)
        const response=await api.get(`${URLs.GET_POST}/${id}`)
        console.log(response)
        return response.data
    }
}
export const categories={
    getAll:async()=>{
        const response=await api.get(`${URLs.GET_CATEGORY}`)
        return response.data;
    }
}