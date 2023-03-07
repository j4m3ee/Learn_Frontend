import React, { useContext, useState,useEffect } from 'react'
import { AuthApi } from '../AuthApi'
import { Navbar, Profile } from '../components'
import { useHistory } from 'react-router-dom'
import axios from 'axios'



export default function ProfilePage() {
    const { user,readCookie,deleteAccount } = useContext(AuthApi)
    const history = useHistory()
    const [details, setDetail] = useState({})
    

    async function onSubmit() {
        await axios.put(`https://todona-api.surawit.com/api/user?id=${user._id}`, {
            phonenumber: details.phonenumber,
            profileURL: details.profileURL
        });
        history.push("/");
        readCookie()
    }

    function update() {
        setDetail({
            userName: user.userName,
            email: user.email,
            phonenumber: user.phonenumber,
            profileURL: user.profileURL
        })
    }

    useEffect(() => {
        update()
    }, [])

    return (
        <div className="ContactPage">
            <Navbar />
            <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Profile</h1>
            <Profile
                details={details}
                setDetail={setDetail}
                onSubmit={onSubmit}
                deleteAccount={deleteAccount}
            />
        </div>
    )
}