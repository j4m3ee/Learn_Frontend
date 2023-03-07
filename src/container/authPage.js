import React, { useState, useEffect, useContext } from 'react'
import Auth from '../components/Auth'
import './index.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import HashLoader from "react-spinners/HashLoader"
import { useHistory } from 'react-router'
import { API_ENDPOINT } from '../config'

export default function AuthPage() {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passconfirm, setPassconfirm] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    const [error,setError] = useState('')
    const [hasAccount, setHasAccount] = useState(false)
    const [loading,setLoading] = useState(false)

    const clearInput = () => {
        setEmail('')
        setUsername('')
        setPassword('')
        setError('')
        setPhonenumber('')
        setPassconfirm('')
    }

    const handleLogin = async () => {
        console.log("sign in", username)
        try {
            setLoading(true)
            await axios.post(`${API_ENDPOINT}login`, {
                userName: username,
                password: password
            }).then((res) => {
                if (res.data.auth) {
                    setLoading(false)
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
            setLoading(false)
            console.log(err)
            setError(err.message)
        }
    }

    const handleSignup = async () => {
        console.log("sign up", username)
        try {
            setLoading(true)
            if(password != passconfirm) throw {message:'Password didn\'t match 😣'}
            await axios.post(`${API_ENDPOINT}user`, {
                userName: username,
                password: password,
                email: email,
                phonenumber: phonenumber
            }).then((result) => {
                if (result.data.auth) {
                    setLoading(false)
                    console.log(result.data)
                    clearInput()
                    history.push(`/verify`)
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
            setLoading(false)
            console.log(err)
            setError(err.message)
        }
    }

    return (
        
        <div className="AuthPage">
            <h1>Welcome to TODONA.</h1>
            <Auth
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                email={email}
                setEmail={setEmail}
                phonenumber={phonenumber}
                setPhonenumber={setPhonenumber}
                error={error}
                setError={setError}
                passconfirm={passconfirm}
                setPassconfirm={setPassconfirm}
            />
            {loading ?
        <div className="auth-loading">
          <HashLoader className="auth-loading" color={'#272727'} loading={loading} size={100} />
        </div> : <div> </div>  }
        </div>
    )
}