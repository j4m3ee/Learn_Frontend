import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './auth.css'

export default function EmailRecovery({
    submitHandler,
    email, setEmail,
    error }) {

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div>
                    <div className="form-group">
                        <label>Email
                                <i className="fas fa-info" style={{ fontSize: "16px", marginLeft: "10px" }}>
                                <span className="tooltiptext">
                                    We will send verify email to this email.
                                        </span>
                            </i>
                        </label>
                        <div>
                            <span className="tooltiptext">

                            </span>
                        </div>
                        <input
                            type="email"
                            autoFocus
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <p className="errorMsg">{error}</p>
                <div>
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </div>
            </div>
        </form>
    )
}

