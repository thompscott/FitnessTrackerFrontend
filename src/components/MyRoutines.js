import { getUserRoutines, deleteRoutine, deleteActivity } from "../api";
import { useState, useEffect } from "react";
import React from "react";
import { CreateRoutine, AttachActivities } from "./index";

function MyRoutines(props) {
    const [username, token] = [props.username, props.token];
    const [routines, setRoutines] = useState([]);
    const [modifyRoutine, setModifyRoutine] = useState(false);
    const [modDelete, setModDelete] = useState(false);
    const [modEditAttAct, setModEditAttAct] = useState(0);
    const [modAttAct, setModAttAct] = useState(0);

    const userRout = async () => {
        if (token) {
            const userRoutines = await getUserRoutines(username, token);
            console.log(userRoutines);
            setRoutines(userRoutines);
        }
    };
    useEffect(() => {
        userRout();
    }, [modifyRoutine, modDelete, modEditAttAct]);

    return (
        <div>
            <CreateRoutine token={token} setModifyRoutine={setModifyRoutine} />
            {routines.map((routine) => {
                return (
                    <div key={routine.id}>
                        <h1>{routine.name}</h1>
                        <h2>Goal: {routine.goal}</h2>
                        <h2>Creator: {routine.creatorName}</h2>
                        <h2>
                            Activities:
                            {routine.activities.map((activity) => {
                                return (
                                    <div key={activity.id}>
                                        <ul>
                                            <li>{activity.name}</li>
                                            <ul>
                                                <li>Description: {activity.description}</li>
                                                <li>Count: {activity.count}</li>
                                                <li>Duration: {activity.duration}</li>
                                            </ul>
                                        </ul>

                                        {((modEditAttAct === activity.routineActivityId) ?
                                            <AttachActivities setModEditAttAct={setModEditAttAct} count={activity.count} duration={activity.duration} modEditAttAct={modEditAttAct} routineId={routine.id} activityId={activity.id} routineActivityId={activity.routineActivityId} token={token} /> :
                                            (<div>
                                                <button onClick={
                                                    () => {
                                                        setModEditAttAct(activity.routineActivityId)
                                                        console.log(activity.routineActivityId)
                                                        console.log(modEditAttAct)
                                                    }
                                                }>Edit Activity</button>
                                                <button onClick={
                                                    async () => {
                                                        await deleteActivity(activity.routineActivityId, token)
                                                        setModDelete(!modDelete)
                                                    }
                                                }>Delete Activity</button>
                                            </div>))}
                                        {/*ternary (modAttAct === activity.id) ? show <AttachActivities setModAttAct/> : edit/delete buttons */}
                                        {/*ternary (modEditAttAct === activity.id) ? show <EditAttActivities setModEditAttAct/> : edit/delte buttons */}
                                    </div>
                                );
                            })}
                        </h2>
                        {((modEditAttAct === routine.id) ? <AttachActivities setModEditAttAct={setModEditAttAct} routineId={routine.id}/> :
                        (<div>
                            <button>Edit</button>
                            <button onClick={async () => {
                                await deleteRoutine(routine.id, token)
                                setModDelete(!modDelete)
                            }}>Delete</button>
                            <button onClick={()=>{
                                setModEditAttAct(routine.id);
                            }}>Attach Activities</button>
                        </div>))}
                        
                    </div>
                );
            })}
        </div>
    );
}
export default MyRoutines;
