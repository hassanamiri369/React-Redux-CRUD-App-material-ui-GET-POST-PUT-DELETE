import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../Redux/action';
import { Link } from 'react-router-dom';


// style
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.users)


    useEffect(() => {
        dispatch(loadUsers())
    }, [])



    const handleDelete = (id) => {
        if (window.confirm("are you sure wanted to delete the user ? ")) {
            dispatch(deleteUser(id))
        }
    }



    return (

        <div style={{display : "flex" , justifyContent : "center" , flexDirection : "column" , alignItems : "center"}}>

        <div>
            <h1>React Redux CRUD App</h1>
        </div>

            <div style={{width : "90%" , minHeight : "100vh" , marginBottom : "100px"}}>

                   
                        <div style={{height : "6rem"}}>
                            <Link to={'/addUser'}><Button variant='contained' color='success'>Add User</Button></Link>
                        </div>
                

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} >

                        <TableHead>
                            <TableRow selected>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Contact</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>


                        <TableBody>
                            {users && users.map((item, index) => (
                                <TableRow  key={item.id}>
                                    <TableCell >{item.id}</TableCell>
                                    <TableCell >{item.name}</TableCell>
                                    <TableCell >{item.email}</TableCell>
                                    <TableCell >{item.contact}</TableCell>
                                    <TableCell >{item.address}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell >
                                        <Button style={{margin : "3px"}} variant="contained" color="secondary" onClick={() => handleDelete(item.id)}>delete</Button>
                                        <Link  to={`/editUser/${item.id}`}><Button style={{margin : "3px"}} variant='contained'>Edit</Button></Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
           
        </div>
    )
}

export default Home
