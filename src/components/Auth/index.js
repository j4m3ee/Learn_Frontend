import React, { useState, useEffect } from 'react'
import './auth.css'

export default function Auth({
    username, setUsername,
    password, setPassword,
    hasAccount, setHasAccount,
    handleLogin, handleSignup,
    email, setEmail,
    phonenumber, setPhonenumber,
    passconfirm, setPassconfirm,
    error }) {

    const submitHandler = e => {
        e.preventDefault()
        !hasAccount ? (handleLogin()) : (handleSignup())
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="form-group">
                    <label>Username{hasAccount ? (
                            <i className="fas fa-info" style={{ fontSize: "16px", marginLeft: "10px" }}>
                                <span className="tooltiptext">
                                Only text and numeric.
                                </span>
                            </i>       
                    ) : (<div></div>)}</label>
                    <input
                        type="text"
                        autoFocus
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password{hasAccount ? (
                            <i className="fas fa-info" style={{ fontSize: "16px", marginLeft: "10px" }}>
                                <span className="tooltiptext">
                                    min Length    8
                                    min Lowercase 1
                                    min Uppercase 1
                                    min Numbers   1
                                    min Symbols   1
                                </span>
                            </i>       
                    ) : (<div></div>)}</label>
                    

                    <input
                        type="password"
                        autoFocus
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>
                <div>
                    {!hasAccount ? (<div></div>) : (
                        <div>
                            <div className="form-group">
                                <label>Confirm Password
                                    <i className="fas fa-info" style={{ fontSize: "16px", marginLeft: "10px" }}>
                                        <span className="tooltiptext">
                                            Confirm password from password box.
                                        </span>
                                    </i>
                                </label>
                                <div>


                                </div>
                                <input
                                    type="password"
                                    autoFocus
                                    required
                                    value={passconfirm}
                                    onChange={(e) => setPassconfirm(e.target.value)}
                                />
                            </div>

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

                            <div className="form-group">
                                <label>Phone number<i className="fas fa-info" style={{ fontSize: "16px", marginLeft: "10px" }}>
                                        <span className="tooltiptext">
                                        Enter mobile phone number.
                                        </span>
                                    </i></label>
                                <input
                                    type="tel"
                                    pattern="[0-9]{10}"
                                    autoFocus
                                    required
                                    value={phonenumber}
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                />

                            </div>
                        </div>)}
                </div>

                <p className="errorMsg">{error}</p>
                <div>
                    {!hasAccount ? (
                        <div>
                            <input type="submit" value="Sign in" />
                            <p>Don't have an account ?
                            <span className="span" onClick={() => setHasAccount(!hasAccount)}> Sign up</span>
                            </p>
                        </div>
                    ) : (
                        <div>
                            <input type="submit" value="Sign up" />
                            <p>Have an account ?
                        <span className="span" onClick={() => setHasAccount(!hasAccount)}> Sign in</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </form>

    )
}