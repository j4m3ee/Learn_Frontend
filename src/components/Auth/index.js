import React, { useState, useEffect } from 'react'
import './auth.css'

export default function Auth({
    username, setUsername,
    password, setPassword,
    hasAccount, setHasAccount,
    handleLogin, handleSignup,
    email, setEmail,
    phonenumber, setPhonenumber,
    error }) {

    const submitHandler = e => {
        e.preventDefault()
        !hasAccount ? (handleLogin()) : (handleSignup())
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        autoFocus
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        autoFocus
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>
                <div>
                    {!hasAccount ? (<div></div>) : (<div><div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            autoFocus
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                        <div className="form-group">
                            <label>Phone number</label>
                            <input
                                type="tel"
                                autoFocus
                                required
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)}
                            />

                        </div></div>)}
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