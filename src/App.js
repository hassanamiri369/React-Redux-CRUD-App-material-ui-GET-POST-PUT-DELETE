import React from 'react'
import {Routes , Route , Link} from "react-router-dom"


// page
import Home from './components/Home';


const App = () => {
  return (
    <div>
        <h1>React Redux CRUD APP Material ui - GET POST PUT DELETE</h1>


      <div className="Routes-content">
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
