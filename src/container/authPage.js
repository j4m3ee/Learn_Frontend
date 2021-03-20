import React, { useState, useEffect, useContext } from 'react'
import Auth from '../components/Auth'
import './index.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import { AuthApi } from '../AuthApi'

export default function AuthPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hasAccount, setHasAccount] = useState(false)
    const { getUser } = useContext(AuthApi)

    const clearInput = () => {
        setEmail('')
        setPassword('')
    }

    const handleLogin = async () => {
        console.log("sign in", email, password)
        try {
            const res = await axios.post(`https://learn-backend-snapm.herokuapp.com/api/login`, {
                userName: email,
                password: password
            })
            if (res.data.auth) {
                console.log('Auth page')
                console.log(res.data)
                Cookies.set("token", res.data.token)
                getUser(res.data.token)
                clearInput()
            }else{
                console.log(res.data)
            }

        } catch (err) {
            console.log(err)
        }
    }

    const handleSignup = async () => {
        console.log("sign up", email, password)
        const res = await axios.post(`https://learn-backend-snapm.herokuapp.com/api/user`, {
            userName: email,
            password: password
        })
        console.log(res.data)
        Cookies.set("token", res.data.token)
        getUser(res.data.token)
        clearInput()
    }

    return (
        <div className="AuthPage">
            <h1>Authentication</h1>
            <Auth
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
            />
        </div>
    )
}