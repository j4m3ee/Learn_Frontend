import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Card from '../components/card'
import Navbar from '../components/navbar'
import { AuthApi } from '../AuthApi'
import PropagateLoader from "react-spinners/PropagateLoader";
import SearchBar from 'react-js-search'
import { API_ENDPOINT } from '../config'

export default function DonePage() {
    const [selectedCard, setSelectedCard] = useState(null)
    const [tasks, setTasks] = useState([])
    const [foundTasks, setFoundTask] = useState([])
    const { user } = useContext(AuthApi)
    const [loading, setLoading] = useState(false)

    const onSearchChange = (text, found) => {
        setFoundTask(found)
    }

    const fetchData = async () => {
        setLoading(true)
        const res = await axios.get(`${API_ENDPOINT}tasks?isFinished=true&user_id=${user._id}`)
        setTasks(res.data)
        setFoundTask(res.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onUnDone = async (id) => {
        try {
            setLoading(true)
            await axios
                .put(`${API_ENDPOINT}task?id=${id}`, {
                    isFinished: false
                })
            setLoading(false)
            const newTasks = tasks.filter(ele => ele._id !== id)
            setTasks(newTasks)
            setFoundTask(newTasks)
        } catch (err) {
            console.log(err)
        }
    }

    const onDelete = async (id) => {
        try {
            setLoading(true)
            await axios.delete(`${API_ENDPOINT}task/${id}`)
            setLoading(false)
            const newTasks = tasks.filter(ele => ele._id !== id)
            setTasks(newTasks)
            setFoundTask(newTasks)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="TodoPage">
            <Navbar />
            <div id="head">
                <h1>Done</h1>
                <SearchBar
                    onSearchTextChange={(b, e) => onSearchChange(b, e)}
                    placeHolderText={" 🔎"}
                    data={tasks}
                />
            </div>
            {loading ?
                <div className="loading">
                    <PropagateLoader color={'#272727'} loading={loading} size={15} />
                </div>
                :
                <div className="card-container">
                    {foundTasks.length !== 0 ? foundTasks.map((ele, i) => (
                        <Card
                            mode={"done"}
                            onUnDone={() => onUnDone(ele._id)}
                            onDelete={() => onDelete(ele._id)}
                            detail={ele}
                            selected={selectedCard === i}
                            key={i}
                            onClick={() => setSelectedCard(i)}
                        />
                    )) : <p style={{ textAlign: "center" }}>You haven't done any task.</p>}
                </div>
            }

        </div>
    )
}