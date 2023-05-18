import React , {useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import {getSingleUser, updateUser } from '../Redux/action'
import { Alert, Button, MenuItem, Select, TextField } from '@mui/material';

const EditUser = () => {

    const navigate = useNavigate()
    const user = useSelector(state => state.users.user)
    console.log('user' , user);
    const {id} = useParams()


    useEffect(()=>{
        dispatch(getSingleUser(id))
    } , [id])


    useEffect(()=>{
        if(user){
            setState({...user})
        }
    } , [user])

    const dispatch = useDispatch()

    
    const [state , setState] = useState({
        name : "",
        email : "",
        contact : "",
        address : "",
        status : ""
    })

    const {name , email , contact , address , status} = state;

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
            dispatch(updateUser(state , id))
            navigate("/")
            setError("")
        }
    }

    return (
        <div>
            <Outlet/>
        <div className='head'>
            <h1>EDIT USER</h1>
             <div style={{backgroundColor : "blue" , width : "70%" , borderRadius : "5px"}}>{error && <Alert severity='error' >{error}</Alert>}</div>
        </div>


        <div className='add-form'>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <div>
                    <TextField  required placeholder='Ali' onChange={handleInputChange} label="Name" variant='outlined' type='text' name='name' value={name || ""} />
                </div>
                <div>
                    <TextField  required placeholder='hassanamiri369@gmail.com' onChange={handleInputChange} label="Email" variant='outlined' type='email' name='email' value={email || ""} />
                </div>
                <div>
                    <TextField required placeholder='09109705963' onChange={handleInputChange} label="Contact" variant='outlined' type='text' name='contact' value={contact || ""} />

                </div>
                <div>
                    <TextField required placeholder='tehran ,Navab ,street 23' onChange={handleInputChange} label="Address" variant='outlined' type='text' name='address' value={address || ""} />
                </div>
                <div>
                        <Select value={state.status} label="Status" name="status" onChange={handleInputChange}>
                            <MenuItem value="InActive" >InActive</MenuItem>
                            <MenuItem value="Active">Active</MenuItem>
                        </Select>
                    </div>
                <div className='buttons-form'>
                    <Button color='primary' type='submit' variant='contained'>Edit User</Button>
                    
                    <Button color='secondary' variant='contained' onClick={() => navigate("/")}>cancel</Button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default EditUser
