import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader"
import { ChangePassword, EmailRecovery } from '../components';

export default function RecoveryPassword() {
    const history = useHistory()
    const { token } = useParams()
    const [password, setPassword] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const clearInput = () => {
        setEmail('')
        setError('')
        setPassword('')
        setPassConfirm('')
    }

    const changePassword = async () => {
        if(password != passConfirm){
            console.log('Password didn\'t match 😣')
            return setError('Password didn\'t match 😣')
        }

        setLoading(true)
        await axios.put(`https://todona-api.surawit.com/api/recovery/${token}`, {
            password: password
        }).then(res => {
            if (res.data.verify) {
                setLoading(false)
                console.log(res.data)
                clearInput()
                alert('Change password success. 🤩')
                history.push(`/login`)
            } else {
                throw res.data
            }
        }).catch(err => {
            setLoading(false)
            console.log(err)
            setError(err.message)
        })
    }

    const sendRecoveryEmail = async () => {
        setLoading(true)
        await axios.post(`https://todona-api.surawit.com/api/recovery`, {
            email: email
        }).then(res => {
            if (res.data.auth) {
                setLoading(false)
                console.log(res.data)
                clearInput()
                history.push(`/verify`)
            } else {
                throw res.data
            }
        }).catch(err => {
            setLoading(false)
            if (err.response) {
                console.log(err.response.data)
                setError(err.response.data.message)
            } else {
                console.log(err.data)
                setError(err.data.message)
            }
        })

    }

    const submitHandler = e => {
        e.preventDefault()
        token ? (changePassword()) : (sendRecoveryEmail())
    }

    return (
        <div className="recoveryPage">
            <div className="info">
                <h1>🔑 Recovery your password</h1>
                <br />
                {token ? (
                    <ChangePassword
                        submitHandler={submitHandler}
                        error={error}
                        password={password}
                        setPassword={setPassword}
                        passConfirm={passConfirm}
                        setPassConfirm={setPassConfirm}
                    />
                ) : (
                    <EmailRecovery
                        email={email}
                        setEmail={setEmail}
                        submitHandler={submitHandler}
                        error={error}
                    />
                )}
            </div>
            {loading ?
                <div className="auth-loading">
                    <HashLoader className="auth-loading" color={'#272727'} loading={loading} size={100} />
                </div> : <div> </div>}
        </div>
    )
}