import React from 'react'
import {SignIn} from '../../Components'
import { useContext } from "react";
import { UserContext } from '../../Context/user';
import './style.css'
export default function Navbar() {

    const [user, setUser] = useContext(UserContext).user;
    return (
        <div className='navbar'>
            <p className="title">SOCIOS</p>
           {user ?
            <img className='navbar_img' src= {user.photoURL}></img>
           
            : <SignIn />} 
        </div>
    )
}
