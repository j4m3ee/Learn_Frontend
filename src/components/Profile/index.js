import React, { useState, useEffect } from 'react'
import './profile.css'

export default function Profile({ details, setDetail, onSubmit }) {
    const [data, setData] = useState({
        userName: "",
        email: "",
        phonenumber: ""
    })

    const submitHandler = e => {
        e.preventDefault()
        onSubmit()
    }

    useEffect(() => {
        setDetail({
            ...details,
            userName: data.userName,
            email: data.email,
            phonenumber: data.phonenumber
        })
    }, [data])

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="form-group">
                    <label for="username"><i class="fas fa-lock"></i>&nbsp;&nbsp;Your username :</label>
                    <input
                        autoFocus
                        value={details.userName}
                        // onChange={(e) => setData({
                        //     ...details,
                        //     userName: e.target.value
                        // })}
                        type="text"
                        placeholder="Your username..."
                        required
                    />
                    
                </div>
                
                <div className="form-group">
                    <label for="email"><i class="fas fa-lock"></i>&nbsp;&nbsp;Your email address :</label>
                    <input
                        autoFocus
                        value={details.email}
                        // onChange={(e) => setData({
                        //     ...details,
                        //     email: e.target.value
                        // })}
                        type="email"
                        placeholder="Your email..."
                        required
                    />
                </div>
                <div className="form-group">
                    <label for="phone"><i class="fas fa-lock-open"></i>&nbsp;&nbsp;Your phone number :</label>
                    <input
                        type="tel"
                        pattern="[0-9]{10}"
                        autoFocus
                        value={details.phonenumber}
                        onChange={(e) => setData({
                            ...details,
                            phonenumber: e.target.value
                        })}
                        placeholder="Your phone number..."
                        required
                    />
                </div>
                
                <div>
                    <input type="submit" value="Save" />
                </div>
               
            </div>
        </form>
    )
}