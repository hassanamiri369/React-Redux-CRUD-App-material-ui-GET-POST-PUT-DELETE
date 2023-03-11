import React , {useEffect } from 'react'

import { useDispatch , useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../Redux/action';


const Home = () => {
    const dispatch = useDispatch();
    const {users , user , loading} = useSelector((state) => state.users)


    useEffect(()=>{
        dispatch(loadUsers())
    } , [])



    const handleDelete = (id) =>{
        if(window.confirm("are you sure wanted to delete the user ? ")){
            dispatch(deleteUser(id))
        }


    }


    return (
        <div className='home-container'>
            {users && users.map((item , index) => (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                    <span>{item.contact}</span>
                    <span>{item.address}</span>
                    <span>
                        <button onClick={()=>handleDelete(item.id)}>delete</button>
                        <button>edit</button>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Home
