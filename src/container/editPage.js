import React, { useState, useEffect } from "react";
import { Navbar, Card } from "../components";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import { API_ENDPOINT } from "../config";

const EditPage = () => {
    const history = useHistory();
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(false)

    async function onSubmit(task, time) {
        setLoading(true)
        await axios.put(`${API_ENDPOINT}task?id=${id}`, {
            taskName: task,
            time: time,
        });
        setLoading(false)
        history.push("/");
    }

    const fetchData = async () => {
        setLoading(true)
        const res = await axios.get(`${API_ENDPOINT}task/${id}`);
        setTask(res.data);
        setLoading(false)
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="EditPage">
            <Navbar />
            {loading ?
                <div className="loading">
                    <PropagateLoader color={'#272727'} loading={loading} size={15} />
                </div>
                :
                <div>
                    <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Edit</h1>
                    <div className="card-container">
                        <Card onSubmit={onSubmit} mode={"edit"} detail={task} />
                    </div>
                </div>
            }

        </div>
    );
};

export default EditPage;