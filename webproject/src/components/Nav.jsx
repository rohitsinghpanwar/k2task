import React from 'react'
import {NavLink} from 'react-router-dom'
function Nav() {
  return (
    <nav className='flex bg-black text-white justify-around lg:text-xl h-12 items-center'>
    <NavLink to={"/home"} className={({isActive})=>isActive?"underline":""}>Home</NavLink>
   <NavLink to={"/signup"} className={({isActive})=>isActive?"underline":""}>Sign-up</NavLink>
     <NavLink to={"/login"} className={({isActive})=>isActive?"underline":""}>Log-in</NavLink>
    <NavLink to={"/about"} className={({isActive})=>isActive?"underline":""}>About</NavLink>
    </nav>
  )
}

export default Nav