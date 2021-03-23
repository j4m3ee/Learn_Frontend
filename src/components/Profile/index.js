import React,{useState,useEffect} from 'react'
import './profile.css'

export default function Profile({detail,onSubmit}){
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')

    useEffect(()=>{
        setUsername(detail.username)
        setEmail(detail.email)
    },[detail])

    return(
        <div className="Profile">
            <div className="container">
                <div className="info">
                    <input
                        className="username-input"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        type="text"
                        placeholder="Your username..."
                        required
                    />
                    <br/>
                    <input
                        className="email-input"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        placeholder="Your email..."
                        required
                    />
                </div>
                <div className="btn-group">
                    <button
                        type="submit"
                        title="Save"
                        onClick={()=>onSubmit(username,email)}
                        id="done"
                    />
                    <i className="fas fa-check"/>
                </div>
            </div>
        </div>
    )
}