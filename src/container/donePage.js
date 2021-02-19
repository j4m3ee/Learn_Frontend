import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/card'

export default function DonePage() {
    const [selectedCard, setSelectedCard] = useState(null)
    const [tasks, setTasks] = useState([])

    const fetchData = async () => {
        const res = await axios.get("https://learn-backend-snapm.herokuapp.com/api/tasks?isFinished=true")
        setTasks(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onUnDone = async (id) => {
        try{
            await axios
            .put(`https://learn-backend-snapm.herokuapp.com/api/task?id=${id}`, {
                isFinished: false
            })

            const newTasks = tasks.filter(ele => ele._id !== id)
            setTasks(newTasks)
        } catch (err){
            console.log(err)
        }
    }

    const onDelete = async (id) => {
        try{
            await axios.delete(`https://learn-backend-snapm.herokuapp.com/api/task/${id}`)

            const newTasks = tasks.filter(ele => ele._id !== id)
            setTasks(newTasks)
        }catch (err){
            console.log(err)
        }
    }

    return (
        <div className="TodoPage">
            <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Done</h1>
            <div className="card-container">
                {tasks.length !== 0 ? tasks.map((ele, i) => (
                    <Card
                        mode={"done"}
                        onUnDone={() => onUnDone(ele._id)}
                        onDelete={() => onDelete(ele._id)}
                        detail={ele}
                        selected={selectedCard === i}
                        key={i}
                        onClick={()=> setSelectedCard(i)}
                    />
                )) : <p style={{ textAlign: "center" }}>You haven't done any task.</p>}
            </div>
        </div>
    )
}