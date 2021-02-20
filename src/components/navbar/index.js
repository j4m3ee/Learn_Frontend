import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const [mode,setMode] = useState(0)

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
                <Link to="/create" onClick={()=>setMode(3)}><button className="create-button">New Task</button></Link>
            </div>
        </div>
    )
}