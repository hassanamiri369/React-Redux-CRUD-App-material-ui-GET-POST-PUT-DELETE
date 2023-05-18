import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/action';
import { Alert, Button, MenuItem, Select, TextField } from '@mui/material';

// style

const AddUser = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        status : "InActive"
    })

    const { name, email, contact, address , status } = state;

    const [error, setError] = useState("");





    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email || !address || !contact || !status ) {
            setError("Please input all input field")
        } else {
            dispatch(addUser(state))
            navigate("/")
            setError("")
        }
    }


    return (
        <div>

            <div className='head'>
                <h1>ADD USER</h1>
                 {/* <Alert severity='error' style={{textAlign : "center" , width : "70%"}}>{error && error}</Alert> */}
                 <div style={{backgroundColor : "blue" , width : "70%" , borderRadius : "5px"}}>{error && <Alert severity='error' >{error}</Alert>}</div>
            </div>


            <div className='add-form'>
                <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                    <div>
                        <TextField  required placeholder='Ali' onChange={handleInputChange} label="Name" variant='outlined' type='text' name='name' value={name} />
                    </div>
                    <div>
                        <TextField  required placeholder='hassanamiri369@gmail.com' onChange={handleInputChange} label="Email" variant='outlined' type='email' name='email' value={email} />
                    </div>
                    <div>
                        <TextField required placeholder='09109705963' onChange={handleInputChange} label="Contact" variant='outlined' type='number' name='contact' value={contact} />

                    </div>
                    <div>
                        <TextField required placeholder='tehran ,Navab ,street 23' onChange={handleInputChange} label="Address" variant='outlined' type='text' name='address' value={address} />
                    </div>
                    <div>
                        <Select value={state.status} label="Status" name="status" onChange={handleInputChange}>
                            <MenuItem value="InActive" >InActive</MenuItem>
                            <MenuItem value="Active">Active</MenuItem>
                        </Select>
                    </div>
                    <div className='buttons-form'>
                        <Button color='primary' type='submit' variant='contained'>Add User</Button>
                        
                        <Button color='secondary' variant='contained' onClick={() => navigate("/")}>cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
