import React , {useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../Redux/action'

const EditUser = () => {

    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    
    const [state , setState] = useState({
        name : "",
        email : "",
        contact : "",
        address : ""
    })

    const {name , email , contact , address} = state;

    const [error , setError] = useState("");





    const handleInputChange = (e)=>{
        let {name , value} = e.target;
        setState({...state , [name] : value})
    }


    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!name || !email || !address || !contact){
            setError("Please input all input field")
        }else{
            dispatch(addUser(state))
            navigate("/")
            setError("")
        }
    }

    return (
        <div>
             <div>
                <h1>Edit USER</h1>
                <p>{error && <span>{error}</span>}</p>
            </div>
           <div className='add-form'>
               <form autoComplete='off' noValidate onSubmit={handleSubmit}>
               <div>
                    <input onChange={handleInputChange} placeholder='name' type="text" name='name' value={name} />
                </div>
                <div>
                    <input onChange={handleInputChange} placeholder='email' type="text" name='email' value={email} />
                </div>
                <div>
                    <input onChange={handleInputChange} placeholder='contact' type="text" name='contact' value={contact} />
                </div>
                <div>
                    <input onChange={handleInputChange} placeholder='address' type="text" name='address' value={address} />
                </div>
                <div>
                    <button type='submit'>edit user</button>
                    <button onClick={()=>navigate("/")}>cancel</button>
                </div>
               </form>
           </div>
        </div>
    )
}

export default EditUser
