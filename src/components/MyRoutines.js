import { getUserRoutines } from "../api"
import { useState, useEffect } from "react"
import React from "react"
import { CreateRoutine, AttachActivities } from "./index";

function MyRoutines(props) {
    const [username, token] = [props.username, props.token];
    const [routines, setRoutines] = useState([]);
    const [modifyRoutine, setModifyRoutine] = useState(false);

    const userRout = async () => {
        if (token) {
            const userRoutines = await getUserRoutines(username, token)
            console.log(userRoutines)
            setRoutines(userRoutines)
        }
    }
    useEffect(() => { userRout() }, [modifyRoutine])

    return (
        <div>
            <CreateRoutine token={token} setModifyRoutine={setModifyRoutine} />
            <AttachActivities />
            {routines.map((routine) => {
                return (
                    <div key={routine.id}>
                        <h1>{routine.name}</h1>
                        <h2>Goal: {routine.goal}</h2>
                        <h2>Creator: {routine.creatorName}</h2>
                        <h2>Activities:{routine.activities.map((activity) => {
                            return (
                                <ul key={activity.id}>
                                    <li>{activity.name}</li>
                                    <ul>
                                        <li>Description: {activity.description}</li>
                                        <li>Count: {activity.count}</li>
                                        <li>Duration: {activity.duration}</li>
                                    </ul>
                                </ul>
                            )
                        })}</h2>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>


                    </div>
                )
            })}
        </div>
    )
}
export default MyRoutines