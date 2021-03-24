import React, { useState, useEffect } from 'react'
import './profile.css'

export default function Profile({ details, setDetail, onSubmit }) {
    const [data, setData] = useState({
        userName: "",
        email: "",
        phonenumber: ""
    })

    useEffect(() => {
        setDetail({
            ...details,
            userName: data.userName,
            email: data.email,
            phonenumber: data.phonenumber
        })
    }, [data])

    return (
        <div className="Profile">
            <div className="container">
                <div className="form-inner">
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
                        <label for="phone">Enter your phone number:</label>
                        <input
                            className="phone-input"
                            id='phone'
                            value={details.phonenumber}
                            onChange={(e) => setData({
                                ...details,
                                phonenumber: e.target.value
                            })}
                            type="tel"
                            placeholder="Your phone number..."
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required
                        />
                    </div>

                </div>
                {/* <div className="btn-group">
                    <button
                        type="submit"
                        title="Save"
                        onClick={() => onSubmit()}
                        id="done"
                    />
                    <i className="fas fa-check" />
                </div> */}
                <div>
                    <input type="submit" onClick={onSubmit} value="Save" />
                </div>
            </div>
        </div>
    )
}