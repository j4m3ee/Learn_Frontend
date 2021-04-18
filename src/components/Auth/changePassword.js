import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './auth.css'

export default function changePassword({
    submitHandler,
    password, setPassword,
    passConfirm, setPassConfirm,
    error }) {

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">

                <div className="form-group">
                    <label>Password
                        <i className="fas fa-info" style={{ fontSize: "16px", marginLeft: "10px" }}>
                            <span className="tooltiptext">
                                <p>min Length    8</p>
                                <p>min Lowercase 1</p>
                                <p>min Uppercase 1</p>
                                <p>min Numbers   1</p>
                                <p>min Symbols   1</p>
                            </span>
                        </i>
                    </label>

                    <input
                        type="password"
                        autoFocus
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>

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
                        value={passConfirm}
                        onChange={(e) => setPassConfirm(e.target.value)}
                    />
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

