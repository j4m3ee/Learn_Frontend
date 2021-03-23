import React,{useContext} from 'react'
import Card from '../components/card'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/navbar'
import { AuthApi } from '../AuthApi'

export default function CreatePage() {
    const history = useHistory()
    const {user} = useContext(AuthApi)

    async function onSubmit(task,time){
        await axios.post(`${process.env.URL}task`,{
            taskName: task,
            time: time,
            user_id: user._id
        })
        history.push('/')
    }

    return(
        <div className="CreatePage">
            <Navbar/>
            <h1>Create</h1>
            <div className="card-container">
                <Card onSubmit={onSubmit} mode={"create"}/>
            </div>
        </div>
    )
}