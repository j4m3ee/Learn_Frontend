import React, { useContext, useState, useEffect } from 'react'
import { AuthApi } from '../AuthApi'
import Navbar from '../components/navbar'
import axios from 'axios'
import PropagateLoader from "react-spinners/PropagateLoader";

export default function HomePage() {
    const { user } = useContext(AuthApi)
    const [data, setData] = useState('')

    const [loading, setLoading] = useState(false)
    const URL = 'https://learn-backend-snapm.herokuapp.com/api/'

    const fetchData = async () => {
        setLoading(true)
        const res = await axios.get(`${URL}taskAnaly/${user._id}`)
        setData(res.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Navbar />
            <h1>Welcome to todona 🎉</h1>
            <h2>Hi <span className="span" style={{cursor:"auto"}}>{user.userName}!</span></h2>

            {loading ?
                <div className="loading">
                    <PropagateLoader color={'#272727'} loading={loading} size={15} />
                </div>
                :
                <div>
                    <div className="stat-container">
                        <h2>✨ Todo task</h2>
                        <h1 style={{marginRight:"50px",color:"#FE4880"}}>{data.undoneTask}</h1>
                    </div>

                    <div className="stat-container">
                        <h2>✨ Done task</h2>
                        <h1 style={{marginRight:"50px",color:"#72BB0F"}}>{data.doneTask}</h1>
                    </div>

                    <div className="stat-container">
                        <h2>✨ All task</h2>
                        <h1 style={{marginRight:"50px",color:"#01BEFE"}}>{data.tasks}</h1>
                    </div>
                </div>
            }
        </div>
    )
}