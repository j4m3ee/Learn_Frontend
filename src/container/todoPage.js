import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Card from '../components/card'
import Navbar from '../components/navbar'
import { AuthApi } from '../AuthApi'
import PropagateLoader from "react-spinners/PropagateLoader";

export default function TodoPage() {
    const history = useHistory()
    const [selectedCard, setSelectedCard] = useState(null)
    const [tasks, setTasks] = useState([])
    const { user } = useContext(AuthApi)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const res = await axios.get(`https://learn-backend-snapm.herokuapp.com/api/tasks?isFinished=false&user_id=${user._id}`)
        setTasks(res.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onEdit = (id) => {
        history.push(`/edit/${id}`)
    }

    const onDone = async (id) => {
        try {
            await axios.put(`https://learn-backend-snapm.herokuapp.com/api/task?id=${id}`, {
                isFinished: true
            })

            const newTasks = tasks.filter(ele => ele._id !== id)
            setTasks(newTasks)
        } catch (err) {
            console.log(err)
        }
    }

    const onDelete = async (id) => {
        try {
            await axios.delete(`https://learn-backend-snapm.herokuapp.com/api/task/${id}`)

            const newTasks = tasks.filter(ele => ele._id !== id)
            setTasks(newTasks)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="TodoPage">
            <Navbar />
            <h1>Todo</h1>
            {loading ?
                <div className="loading">
                    <PropagateLoader color={'#272727'} loading={loading} size={15} />
                </div>
                :
                <div className="card-container">
                    {tasks.length !== 0 ? tasks.map((ele, i) => (
                        <Card
                            mode={"default"}
                            onDone={() => onDone(ele._id)}
                            onEdit={() => onEdit(ele._id)}
                            onDelete={() => onDelete(ele._id)}
                            detail={ele}
                            selected={selectedCard === i}
                            key={i}
                            onClick={() => setSelectedCard(i)}
                        />
                    )) : <p style={{ textAlign: "center" }}>Hooray! You have no more task todo.</p>}
                </div>
            }

        </div>
    )
}