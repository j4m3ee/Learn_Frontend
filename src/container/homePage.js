import React,{useContext} from 'react'
import { AuthApi } from '../AuthApi'
import Navbar from '../components/navbar'

export default function HomePage(){
    const {user} = useContext(AuthApi)

    return(
        <div>
            <Navbar/>
            <h1>Welcome to my website!</h1>
            <h2>Hi {user.userName}!</h2>
        </div>
    )
}