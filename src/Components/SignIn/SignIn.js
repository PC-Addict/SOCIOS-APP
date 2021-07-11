import React from 'react'
import { useContext } from "react";
import { UserContext } from '../../Context/user';
import { signinwithgoogle } from '../../Services/auth';
import './style.css'


export default function SignIn() {
    const [User, setUser] = useContext(UserContext).user;
    
    // add fxn to sign in click

    const signinbuttonclick = async()=>{
        let userSignin = await signinwithgoogle();
        if(userSignin)  setUser(userSignin)
         console.log("sign in");
    };


    return (
        <div className="signin-button" onClick={signinbuttonclick}>
            <p>Sign In</p>
        </div>
    )
}
