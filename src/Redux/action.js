import axios from "axios";
import * as types from "./actionType";


const getUSers = (users) =>({type : types.GET_USERS , payload : users})


export const loadUsers = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:3004/users")
        .then((res)=> {
            console.log("res" , res);
            dispatch(getUSers(res.data))
        })
        .catch((error)=> console.log(error))
    }
};