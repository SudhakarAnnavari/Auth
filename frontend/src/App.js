import React from 'react'
import SignUp from './components/SignUp'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home}  />
        <Route path='/login' Component={Login}  />
        <Route path='/signup' Component={SignUp}  />
      </Routes>
    </div>
  )
}

export default App
