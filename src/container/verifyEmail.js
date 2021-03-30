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
        <div>
            <h1>Verifying Your account.</h1>
            {token ? (
                <div>
                    <Link to="/auth" onClick={() => console.log('Go Login')}><button className="create-button">Login</button></Link>
                </div>
            ) : (
                <div>
                    <h2>Check your email!</h2>
                </div>
            )}


        </div>
    )
}