import React from 'react';
// import {SignIn} from "../../Components"
import { Createpost, Navbar } from '../../Containers';
import { Feed } from '../../Containers';
import './style.css'

export default function Home() {
    return (
        <div className='home'>
             {/* import signin */}
             <Navbar />
             <Createpost />
             <Feed />

        </div>
    )
}
