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
        
        case types.ADD_USER : 
            return {...state , loading : false}


            // set select user data in user object for edit and update
        case types.GET_SINGLE_USER : 
            return {...state , loading : false , user : action.payload}
        default : 
          return state
    }
}

export default userReducer;