import * as types from "./actionType";


const initState = {
    users : [],
    user : {},
    loading : true,
}


const userReducer = (state = initState , action) =>{
    switch(action.type){
        case types.GET_USERS : 
            return {...state , users : action.payload , loading : false}

        case types.DELETE_USER : 
            return {...state , loading : false}
        default : 
          return state
    }
}

export default userReducer;