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
    }
}