import { publicRoutines } from "../api"
import { useState, useEffect, } from "react"
import React from "react"
import { Link, Route } from "react-router-dom";


function Routines(props) {
    const [routines, setRoutines] = useState([]);
    const [seeUser, setSeeUser] = [props.seeUser, props.setSeeUser];

    const pubRout = async () => {
        const allRoutines = await publicRoutines()
        setRoutines(allRoutines)
    }
    useEffect(() => { pubRout() }, [])

    return (
        <div>
            {routines.map((routine) => {
                return (
                    <div key={routine.id} className="routines">
                        <div className="displayCard">
                        <h1>{routine.name}</h1>
                        <h2>Goal: {routine.goal}</h2>
                        <h2>Creator: <Link onClick={()=> {
                            setSeeUser(routine.creatorName)
                        }}className="userLink" to="/routines/user">{routine.creatorName}</Link></h2>
                        <div className="activityCard">
                        <h2 >Activities: </h2>
                        {routine.activities.map((activity) => {
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
                        })}
                        </div>
                    </div>
                    
                        


                    </div>
                )
            })}
        </div>
    )
}
export default Routines