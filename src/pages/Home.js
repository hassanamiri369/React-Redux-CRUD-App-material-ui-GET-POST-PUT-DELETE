import React, { useEffect , useState} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../Redux/action';
import { Link } from 'react-router-dom';


const Home = () => {
    const dispatch = useDispatch();
    const { users, user, loading } = useSelector((state) => state.users)


    useEffect(() => {
        dispatch(loadUsers())
    }, [])



    const handleDelete = (id) => {
        if (window.confirm("are you sure wanted to delete the user ? ")) {
            dispatch(deleteUser(id))
        }


    }

    // if(loading){
    //     return <h2>Loading ...</h2>
    // }




    return (

        <>
            <div className='home-header'>
                <div>
                    <Link to={'/addUser'}>Add User</Link>
                </div>
            </div>
            <div className='home-container'>
                {loading && <h1>Loading data...</h1>}

                {users && users.map((item, index) => (
                    <div key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.email}</span>
                        <span>{item.contact}</span>
                        <span>{item.address}</span>
                        <span>
                            <button onClick={() => handleDelete(item.id)}>delete</button>
                            <Link to={`/editUser/${item.id}`}><button>Edit</button></Link>
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
