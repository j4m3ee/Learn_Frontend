import React, { useState, useEffect } from "react";
import { Navbar, Card } from "../components";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
    const history = useHistory();
    const { id } = useParams();
    const [task, setTask] = useState(null);

    async function onSubmit(task, time) {
        await axios.put(`https://learn-backend-snapm.herokuapp.com/api/task?id=${id}`, {
            taskName: task,
            time: time,
        });
        history.push("/");
    }

    const fetchData = async () => {
        const res = await axios.get(`https://learn-backend-snapm.herokuapp.com/api/task/${id}`);
        setTask(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="EditPage">
            <Navbar />
            <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Edit</h1>
            <div className="card-container">
                <Card onSubmit={onSubmit} mode={"edit"} detail={task} />
            </div>
        </div>
    );
};

export default EditPage;