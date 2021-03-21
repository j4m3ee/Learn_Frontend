import React, {useState,useEffect} from 'react'
import './card.css'

export default function Card({ detail, selected, mode, onClick, onSubmit, onEdit, onDone, onUnDone, onDelete }){
    const [task,setTask] = useState("")
    const [time,setTime] = useState(currentDate()+ "T" +currentTime())

    useEffect(()=>{
        if(mode === "edit"){
            setTask(detail?.taskName)
            setTime(detail?.time)
        }
    },[detail])

    function currentDate(){
        const d = new Date()
        var month = "" + (d.getMonth() + 1)
        var day = "" + d.getDate()
        var year = d.getFullYear()

        if (day.length < 2) day = "0" + day
        if (month.length < 2) month = "0" + month

        return [year,month,day].join("-")
    }

    function currentTime() {
        const d = new Date()
        var hour = "" + d.getHours()
        var minute = "" + d.getMinutes()

        if(hour.length < 2) hour = "0" + hour
        if(minute.length < 2) minute = "0" + minute

        return [hour,minute].join(":")
    }

    return(
        <div className={selected ? "Card selectd" : "Card"} onClick={onClick}>
            {mode === "create" || mode === "edit" ? (
                <div className="container">
                    <div className="info">
                        <input
                            className="task-input"
                            value={task}
                            onChange={(e)=>setTask(e.target.value)}
                            type="text"
                            placeholder="todo..."
                            required
                        />
                        <br/>
                        <input  
                            className="time-input"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            type="datetime-local"
                            min={currentDate() + "T" + currentTime()}
                            required
                        />
                    </div>
                    <div className="btn-group">
                        <button
                            type="submit"
                            title="Save"
                            onClick={()=> onSubmit(task,time)}
                            id="done"
                            >
                            <i className="fas fa-check"/>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="info">
                        <h4 className="task">{detail.taskName}</h4>
                        <p className="time">
                            {new Date(detail.time).toLocaleString([],{
                                dateStyle: "long",
                                timeStyle: "short",
                            })}
                        </p>
                    </div>
                    {selected && (
                        <div className="btn-group">
                            {mode !== "done" && (
                                <button title="Mask as Done" id="done" onClick={onDone}>
                                    <i className="fas fa-check"/>
                                </button>
                            )}
                            {mode === "default" && (
                                <button title="Edit Task" id="edit" onClick={onEdit}>
                                    <i className="fas fa-pen"/>
                                </button>
                            )}
                            {mode === "done" && (
                                <button title="Undone Task" id="edit" onClick={onUnDone}>
                                    <i className="fas fa-undo"/>
                                </button>
                            )}
                            {(mode !== "create" || mode !== "edit") && (
                                <button title="Delete Task" id="del" onClick={onDelete}>
                                    <i className="fa fa-trash-alt"/>
                                </button>
                            )}
                        </div>
                    )}
                    
                </div>
            )}
        </div>
    )
}