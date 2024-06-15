import { useSelector } from "react-redux";
export const useAuth=()=>{

    const {token}=useSelector((state)=>state.auth)

    if(token && token!=null){
        return true
    }
    return false
}