import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
export const AuthApi = createContext()
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [auth,setAuth] = useState(false)

    const handleLogout = () => {
        console.log('Clear session')
        setUser(null)
        setAuth(false)
        Cookies.remove('token')
    }
 
    const readCookie = async () =>{
        const token = Cookies.get('token')
        if(token){
            // setAuth(true)
            const User = await getUser(token)
            if(User){
                setAuth(true)
                setUser(User)
            }else{
                handleLogout()
            }
        }
    }
    
    const getUser = async (token) => {
        try {
            const res = await axios.get(`https://learn-backend-snapm.herokuapp.com/api/user`, {
                headers: {
                    token: token
                }
            })
            if (res.data.name == "TokenExpiredError") {
                throw res.data
            }
            return res.data
        } catch (err) {
            console.log('err : '+ err)
            return null
        }
    }

    useEffect(() => {
        readCookie()
    }, [])

    return (
        <AuthApi.Provider
            value={{ user, setUser, getUser ,auth,setAuth,handleLogout}}>
            {children}
        </AuthApi.Provider>
    )
}