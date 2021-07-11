import React from 'react'
import {SignIn} from '../../Components'
import { useContext } from "react";
import { UserContext } from '../../Context/user';
import './style.css'
// import { logout } from '../../Services/auth';
export default function Navbar() {
    const refreshPage = ()=>{
        window.location.reload();
     }

    const [user, setUser] = useContext(UserContext).user;
    return (
        <div className='navbar'>
            <p className="title">SOCIOS</p>
           {user ?
           <div className='detail_pane'>
               
            <img className='navbar_img' src= {user.photoURL}></img>
            <button className="logout" onClick={refreshPage } >Logout</button>
           </div>
           
           
            : <SignIn />} 
        </div>
    )
}
