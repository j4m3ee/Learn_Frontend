import React, { useState, useEffect, useContext } from 'react'
import Auth from '../components/Auth'
import './index.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import { AuthApi } from '../AuthApi'

export default function AuthPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')
    const [hasAccount, setHasAccount] = useState(false)
    const { getUser } = useContext(AuthApi)
    const URL = 'https://learn-backend-snapm.herokuapp.com/api/'

    const clearInput = () => {
        setEmail('')
        setPassword('')
        setError('')
    }

    const handleLogin = async () => {
        console.log("sign in", email)
        try {
            const res = await axios.post(`${URL}login`, {
                userName: email,
                password: password
            }).then((res) => {
                if (res.data.auth) {
                    console.log('Auth page')
                    console.log(res.data)
                    Cookies.set("token", res.data.token)
                    window.location.reload();
                    clearInput()
                } else {
                    throw res.data
                }
            }).catch((err) => {
                if(err.response){
                    throw err.response.data
                }else{
                    throw err
                }
            })

        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    const handleSignup = async () => {
        console.log("sign up", email)
        try {
            await axios.post(`${URL}user`, {
                userName: email,
                password: password
            }).then((result) => {
                if (result.data.auth) {
                    console.log(result.data)
                    Cookies.set("token", result.data.token)
                    window.location.reload();
                    clearInput()
                } else {
                    throw result.data
                }
            }).catch((err) => {
                if(err.response){
                    throw err.response.data
                }else{
                    throw err
                }
            })
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    return (
        <div className="AuthPage">
            <h1>Welcome to TODONA.</h1>
            <Auth
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                error={error}
                setError={setError}
            />
        </div>
    )
}