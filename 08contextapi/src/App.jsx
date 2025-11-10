import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <>
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />

    </UserContextProvider>
      
    {/* or instead ofcreating a UserContextProvider method you can also write in app.jsx <UserContext.Provider value={{user,setUser}}></UserContext.Provider> what you did there  */}
    </>
  )
}

export default App
