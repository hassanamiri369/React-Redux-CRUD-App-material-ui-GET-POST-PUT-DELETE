import axios from "axios";
import * as types from "./actionType";


const getUSER = (users) =>({type : types.GET_USERS , payload : users})
const deleteUSER = () => ({type : types.DELETE_USER})
const addUSER = () =>({type : types.ADD_USER})

export const loadUsers = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:3004/users")
        .then((res)=> {
            console.log("res" , res);
            dispatch(getUSER(res.data))
        })
        .catch((error)=> console.log(error))
    }
};


export const deleteUser = (id) =>{
    return(dispatch) =>{
        axios.delete(`http://localhost:3004/users/${id}`)
        .then((res) => {
            console.log('res' , res);
            dispatch(deleteUSER())
            dispatch(loadUsers())
        })
    }
}


export const addUser = (user)=>{
    return (dispatch)=>{
        axios.post("http://localhost:3004/users" , user)
        .then((res) => {
            console.log("res" , res);
            dispatch(addUSER())
            dispatch(loadUsers())
        })
        .catch((error) => console.log(error))
    }
}