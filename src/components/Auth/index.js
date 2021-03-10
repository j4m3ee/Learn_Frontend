import React, { useState, useEffect } from 'react'
import './auth.css'

export default function Auth({
    email, setEmail,
    password, setPassword,
    hasAccount, setHasAccount,
    handleLogin,handleSignup }) {

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
                        type="email"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <p className="errorMsg">{emailError}</p> */}
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
                    {/* <p className="errorMsg">{passwordError}</p> */}
                </div>

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