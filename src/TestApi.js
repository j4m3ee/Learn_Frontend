import React, { useState, useEffect } from 'react'
import axios from "axios"

const TestApi = () => {
    const [todo, setTodo] = useState([])
    const [done, setDone] = useState([])
    const [createInput, setCreateInput] = useState("")
    const [createTime, setCreateTime] = useState("")

    useEffect(() => {
        fetchTodoTask()
        fetchDoneTask()
    }, [])

    function fetchTodoTask() {
        axios
            .get("https://learn-backend-snapm.herokuapp.com/api/tasks?isFinished=false")
            .then((res) => setTodo(res.data))
    }

    function fetchDoneTask() {
        axios
            .get("https://learn-backend-snapm.herokuapp.com/api/tasks?isFinished=true")
            .then((res) => setDone(res.data))
    }

    function onCreate() {
        axios
            .post("https://learn-backend-snapm.herokuapp.com/api/task", {
                taskName: createInput,
                time: createTime
            })
            .then(() => {
                setCreateInput("")
                setCreateTime("")
                fetchTodoTask()
            })
    }

    function onUpdate(id, isFinished) {
        axios
            .put(`https://learn-backend-snapm.herokuapp.com/api/task?id=${id}`, {
                isFinished: isFinished
            })
            .then(() => {
                fetchTodoTask()
                fetchDoneTask()
            })
    }

    function onDelete(id) {
        axios.delete(`https://learn-backend-snapm.herokuapp.com/api/task/${id}`).then(() => {
            fetchTodoTask()
            fetchDoneTask()
        })
    }

    return <div>
        <div>
            <h1>Todo</h1>
            <ul>
                {todo.map((task) => (
                    <li>
                        <span>{task.taskName} </span>
                        <span>{task.time} </span>
                        <button onClick={() => onUpdate(task._id, true)}>✔</button>
                        <button onClick={() => onDelete(task._id)}>🙈</button>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <h1>Done</h1>
            <ul>
                {done.map((task) => (
                    <li>
                        <span>{task.taskName} </span>
                        <span>{task.time} </span>
                        <button onClick={() => onUpdate(task._id, false)}>❌</button>
                        <button onClick={() => onDelete(task._id)}>🙈</button>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <h1>Create</h1>
            <input value={createInput} onChange={(e) => {
                setCreateInput(e.target.value)
            }} />
            <input value={createTime} type="time" onChange={(e) => setCreateTime(e.target.value)} />
            <button onClick={() => onCreate()}>Create!!</button>
        </div>
    </div>
}

export default TestApi