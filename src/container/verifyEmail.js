import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";

export default function VerifyEmail() {
    const history = useHistory();
    const { token } = useParams();

    const verifyToken = async () => {
        const res = await axios.get(`https://learn-backend-snapm.herokuapp.com/api/verify/${token}`)
        console.log(res)
    }

    useEffect(() => {
        verifyToken()
    }, [])

    return (
        <div className="ContactPage">
            <div className="card-container">
                <div className="info">
                    <h1>📤 Verify your email.</h1>
                    <br/>
                    {token ? (
                        <div>
                            <span style={{fontSize:"20px"}}>Verify success! </span>
                            <Link to="/auth" onClick={() => console.log('Go Login')}><button className="button">Click here</button></Link>
                            <span style={{fontSize:"20px"}}> for login! 🎉</span>
                        </div>
                    ) : (
                        <div>
                            <span style={{fontSize:"20px"}}>Please check your email inbox!</span>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}