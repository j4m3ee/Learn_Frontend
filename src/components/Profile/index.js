import React, { useState, useEffect } from 'react'
import './profile.css'

export default function Profile({ details, setDetail, onSubmit}) {
    const [data, setData] = useState({
        userName: "",
        email: "",
        phoneNumber: ""
    })

    useEffect(() => {
        setDetail({
            ...details,
            userName: data.userName,
            email: data.email,
            phoneNumber: data.phoneNumber
        })
    }, [data])

    return (
        <div className="Profile">
            <div className="container">
                <div className="info">
                    <label for="username">Enter username:</label>
                    <input
                        className="username-input"
                        id="username"
                        value={details.userName}
                        onChange={(e) => setData({
                            ...details,
                            userName: e.target.value
                        })}
                        type="text"
                        placeholder="Your username..."
                        required
                    />
                    <br />
                    <label for="email">Enter your email address:</label>
                    <input
                        className="email-input"
                        id="email"
                        value={details.email}
                        onChange={(e) => setData({
                            ...details,
                            email: e.target.value
                        })}
                        type="email"
                        placeholder="Your email..."
                        required
                    />
                    <br />
                    <label for="phone">Enter your phone number:</label>
                    <input
                        className="phone-input"
                        id='phone'
                        value={details.phoneNumber}
                        onChange={(e) => setData({
                            ...details,
                            phoneNumber: e.target.value
                        })}
                        type="tel"
                        placeholder="Your phone number..."
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                    />
                </div>
                <div className="btn-group">
                    <button
                        type="submit"
                        title="Save"
                        onClick={() => onSubmit(details)}
                        id="done"
                    />
                    <i className="fas fa-check" />
                </div>
            </div>
        </div>
    )
}