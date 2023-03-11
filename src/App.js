import React from 'react'
import {Routes , Route , Link} from "react-router-dom"


// page
import Home from './pages/Home';
import AddUser from './pages/AddUser';


const App = () => {
  return (
    <div>
        <h1>React Redux CRUD APP Material ui - GET POST PUT DELETE</h1>


      <div className="Routes-content">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/addUser" element={<AddUser/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
