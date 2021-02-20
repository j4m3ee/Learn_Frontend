import React from 'react'
import './index.css'

export default function ContactPage() {
    return (
        <div className="ContactPage">
            <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Contact</h1>
            <div className="card-container" >
                <div className="info">
                    <h2>My name is snap!!</h2>
                    <div style={{ backgroundColor: "#c8c8c8", width: "25vw", height: "1px", margin: "1rem 0" }}></div>
                    <p>Email : j4m3ee01@gmail.com</p>
                    <p>Tel : 098-696-8769</p>
                </div>
                <div className="pic">
                    <img src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/80713710_2819506218113625_4887337479046168576_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHqFpS55jwDaCNd-lV04i60r63lkpei6QivreWSl6LpCLAGtrvnavtt1TN53DG6Ajtk2sk6x4Hg50iJ1xSqQHVE&_nc_ohc=RoYX9JDHxaMAX_B7KjE&_nc_ht=scontent.fbkk7-3.fna&oh=670c7c0e3d7e0e0a0867fef0d983d97b&oe=6054D936"
                        alt="profile-pic" />
                </div>
            </div>
            <div className="gif-container">
                <div class="contact">
                    <a href="https://www.instagram.com/ijame.srw">
                        <img class="item-m" alt="Surawit | Instagram" src="https://github.com/j4m3ee/j4m3ee.github.io/blob/gh-pages/assets/instagram.gif?raw=true" />
                    </a>
                    <a href="https://www.facebook.com/IJameSRW">
                        <img class="item-m" alt="Surawit | Facebook" src="https://github.com/j4m3ee/j4m3ee.github.io/blob/gh-pages/assets/facebook.gif?raw=true" />
                    </a>
                    <a href="https://github.com/j4m3ee">
                        <img class="item-m" alt="Surawit | Github" src="https://github.com/j4m3ee/j4m3ee.github.io/blob/gh-pages/assets/github.gif?raw=true" />
                    </a>
                    <a href="https://twitter.com/SYosaeng">
                        <img class="item-s" alt="Surawit | Twitter" src="https://github.com/j4m3ee/j4m3ee.github.io/blob/gh-pages/assets/twitter.gif?raw=true" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCt_m-i4rhpKJlUNSW0zF80Q">
                        <img class="item-l" alt="Surawit | Youtube" src="https://github.com/j4m3ee/j4m3ee.github.io/blob/gh-pages/assets/youtube.gif?raw=true" />
                    </a>
                </div>
            </div>
        </div>
    )
}