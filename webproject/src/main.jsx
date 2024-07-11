import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import About from './components/About.jsx'
import Nav from './components/Nav.jsx'
import Forgot from './components/Forgot.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
const router=createBrowserRouter([
  {
    path:"/",
    element:<><Nav/><Home/></> 
  },
  {
    path:"/home",
    element:<><Nav/><Home/></>
  },
  {
    path:"/login",
    element:<><Nav/><Login/></>
  },
  {
    path:"/signup",
    element:<><Nav/><Signup/></>
  },
  {
    path:"/about",
    element:<><Nav/><About/></>
  },
  {
    path:"/forgotpassword",
    element:<><Nav/><Forgot/></>
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
