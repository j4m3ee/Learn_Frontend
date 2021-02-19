import React from 'react'
import Card from '../components/card'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

export default function CreatePage() {
    const history = useHistory()

    async function onSubmit(task,time){
        await axios.post(`https://learn-backend-snapm.herokuapp.com/api/task`,{
            taskName: task,
            time: time
        })
        history.push('/')
    }

    return(
        <div className="CreatePage">
            <h1 style={{fontSize:"48px",margin:"0.5rem 0"}}>Create</h1>
            <div className="card-container">
                <Card onSubmit={onSubmit} mode={"create"}/>
            </div>
        </div>
    )
}