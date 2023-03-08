import React from 'react'
import Navbar from '../components/navbar'
import './index.css'
import profilePic from '../assets/profile.jpg'

export default function ContactPage() {
    return (
        <div className="ContactPage">
            <Navbar/>
            <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Contact</h1>
            <div className="card-container" >
                <div className="info">
                    <h2>My name is Jame!</h2>
                    <div style={{ backgroundColor: "#c8c8c8", width: "25vw", height: "1px", margin: "1rem 0" }}></div>
                    <p>Email : contact@surawit.com</p>
                    <p>Tel : 098-696-8769</p>
                </div>
                <div className="pic">
                    <img src={profilePic}
                        alt="profile-pic" />
                </div>
            </div>
            <div className="gif-container">
                <div className="contact">
                    <a href="https://www.instagram.com/ijame.srw">
                        <img className="item-m" alt="Surawit | Instagram" src="https://github.com/j4m3ee/j4m3ee.github.io/blob/gh-pages/assets/instagram.gif?raw=true" />
                    </a>
                    <a href="https://www.facebook.com/IJameSRW">
                        <img className="item-m" alt="Surawit | Facebook" src="https://github.com/j4m3ee/j4m3ee.github.io/blob/gh-pages/assets/facebook.gif?raw=true" />
                    </a>
                    <a href="https://github.com/j4m3ee">
                        <img className="item-m" alt="Surawit | Github" src="https://github.com/j4m3ee/j4m3ee.github.io/blob/gh-pages/assets/github.gif?raw=true" />
                    </a>
                    <a href="https://twitter.com/SYosaeng">
                        <img className="item-s" alt="Surawit | Twitter" src="https://github.com/j4m3ee/j4m3ee.github.io/blob/gh-pages/assets/twitter.gif?raw=true" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCt_m-i4rhpKJlUNSW0zF80Q">
                        <img className="item-l" alt="Surawit | Youtube" src="https://github.com/j4m3ee/j4m3ee.github.io/blob/gh-pages/assets/youtube.gif?raw=true" />
                    </a>
                </div>
            </div>
        </div>
    )
}