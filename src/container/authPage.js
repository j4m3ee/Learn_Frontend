import React,{useState,useEffect} from 'react'
import Auth from '../components/Auth'
import './index.css'

export default function AuthPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hasAccount, setHasAccount] = useState(false)

    const clearInput = () => {
        setEmail('')
        setPassword('')
    }

    const handleLogin = () => {
        console.log("sign in",email,password)
        clearInput()
    }

    const handleSignup = () => {
        console.log("sign up",email,password)
        clearInput()
    }

    return(
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