import React, { useState, useEffect } from 'react'
import './profile.css'
import Recaptcha from 'react-recaptcha'

export default function Profile({ details, setDetail, onSubmit, deleteAccount }) {
    const [isVerified, setIsVerified] = useState(false)
    const [data, setData] = useState({
        userName: "",
        email: "",
        phonenumber: "",
        profileURL: ""
    })

    const deleteHandler = () => {

        if (isVerified) {
            if (!window.confirm("Are you sure for delete account ❓")) {
                return console.log('Cancel delete.')
            }
            deleteAccount()
        } else {
            alert('Please verify that you are a human!')
        }
    }

    const submitHandler = e => {
        e.preventDefault()
        if (isVerified) {
            onSubmit()
        } else {
            alert('Please verify that you are a human!')
        }
    }

    useEffect(() => {
        setDetail({
            ...details,
            userName: data.userName,
            email: data.email,
            phonenumber: data.phonenumber,
            profileURL: data.profileURL
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
                    <label for="phone">&nbsp;&nbsp;Your phone number :</label>
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

                <div className="form-group">
                    <label for="file">&nbsp;&nbsp;URL profile image :</label>
                    <input
                        type="url"
                        autoFocus
                        value={details.profileURL}
                        onChange={(e) => setData({
                            ...details,
                            profileURL: e.target.value
                        })}
                        placeholder="Your profile image url..."
                        required
                    />
                </div>
                <div>
                    <Recaptcha
                        sitekey="6LfCkawaAAAAAL4pUFgWI04jhrCavJAWC_v8_sqi"
                        render="explicit"
                        verifyCallback={() => setIsVerified(true)}
                        onloadCallback={() => setIsVerified(false)}
                    />
                    <input type="submit" value="Save" />
                    <input type="button" value="Delete Account" onClick={() => deleteHandler()} />
                </div>

            </div>
        </form>
    )
}