import React,{useContext} from 'react'
import { AuthApi } from '../AuthApi'
import { Navbar } from '../components'

export default function ProfilePage(){
    const {user} = useContext(AuthApi)
    return(
        <div  className="ContactPage">
            <Navbar/>
            <h1>Your id</h1>
            <h2>{user._id}</h2>
            <h1>Your Email</h1>
            <h2>{user.userName}</h2>
        </div>
    )
}