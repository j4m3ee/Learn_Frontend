import React, { useState,useEffect,useContext } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import {AuthApi} from '../../AuthApi'

export default function Navbar() {
    const [mode,setMode] = useState(0)
    const {user,setAuth,handleLogout} = useContext(AuthApi)

    useEffect(()=>{
        setMode(window.location.pathname)
    },[mode])

    return(
        <div className="navbar">
            <div className="content">
                <Link to="/" className="brand" onClick={()=>setMode(3)}>
                    <i className="far fa-calendar-check" style={{fontSize:"22px"}}></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;TODONA
                </Link>
                <div className="link-page">
                    <Link to="/todo" onClick={()=>setMode(0)} style={mode==="/todo"?{color:"#009BFF"}:null}>Todo</Link>
                    <Link to="/done" onClick={()=>setMode(1)} style={mode === "/done" ? {color:"#009BFF"}:null}>Done</Link>
                    <Link to="/contact" onClick={()=>setMode(2)} style={mode === "/contact" ? {color: "#009BFF"}:null}>Contact</Link>
                </div>
                <div className="right-box">
                    <Link to="/create" onClick={()=>setMode(3)}><button className="create-button"><i class="fas fa-plus-square"></i></button></Link>
                    <Link to="/profile" onClick={()=>console.log('Go setting')}><button className="create-button"><i class="fas fa-user-cog"></i></button></Link>
                    <Link to="/auth" onClick={()=> handleLogout()}><button className="create-button">Logout</button></Link>
                </div>
            </div>
        </div>
    )
}