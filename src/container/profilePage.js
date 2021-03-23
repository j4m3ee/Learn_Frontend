import React, { useContext, useState } from 'react'
import { AuthApi } from '../AuthApi'
import { Navbar, Profile } from '../components'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function ProfilePage() {
    const { user } = useContext(AuthApi)
    const history = useHistory()
    const [phone, setPhone] = useState('')
    const [details, setDetail] = useState({
        userName: user.userName,
        email: user.email,
        phoneNumber: user.phoneNumber
    })

    async function onSubmit(details) {
        // await axios.put(`https://learn-backend-snapm.herokuapp.com/api/user?id=${user._id}`, {
        //     userName: detail.userName,
        //     email: detail.email,
        //     phoneNumber: detail.phoneNumber
        // });
        // history.push("/");
        console.log(details)
    }

    return (
        <div className="ContactPage">
            <Navbar />
            <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Profile</h1>
            <div className="profile-container" >
                <div>
                    <h2>{user.userName}</h2>
                    <div style={{ backgroundColor: "#c8c8c8", width: "25vw", height: "1px", margin: "1rem 0" }}></div>
                    <p>Email : {user.userName}</p>
                    <p>ID : {user._id}</p>
                </div>
                <div className="pic">
                    <img src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/80713710_2819506218113625_4887337479046168576_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHqFpS55jwDaCNd-lV04i60r63lkpei6QivreWSl6LpCLAGtrvnavtt1TN53DG6Ajtk2sk6x4Hg50iJ1xSqQHVE&_nc_ohc=_sxvaNX2GswAX8bRWtk&_nc_ht=scontent.fbkk7-3.fna&oh=9dcfebe97bbe1316654ea36df466d237&oe=607C6636"
                        alt="profile-pic" />
                </div>
            </div>
            {/* <Profile
                details={details}
                setDetail={setDetail}
                onSubmit={onSubmit}
            /> */}
        </div>
    )
}