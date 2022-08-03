import { publicRoutines } from "../api"
import { useState, useEffect } from "react"
import React from "react"

function Routines() {
    const [routines, setRoutines] = useState([]);

    const pubRout = async () => {
        const allRoutines = await publicRoutines()
        setRoutines(allRoutines)
    }
    useEffect(() => { pubRout() }, [])

    return (
        <div>
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


                    </div>
                )
            })}
        </div>
    )
}
export default Routines