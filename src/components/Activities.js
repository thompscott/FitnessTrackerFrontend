import { getActivities } from "../api";
import { useState, useEffect } from "react";
import React from "react";
import { CreateActivity } from "./index";



function Activities(props) {
    const [token] = [props.token]
    const [activities, setActivities] = useState([]);
    const [modify, setModify] = useState(false)
    const acts = async () => {
        const allActivities = await getActivities()
        setActivities(allActivities)
    }
    useEffect(() => { acts() }, [modify])

    return (
        <div className="activities">
            {(token ? < CreateActivity setModify={setModify} /> : null)}
            {activities.map((activity) => {
                return (
                    <div className="displayCard" key={activity.id}>
                        <h1>{activity.name}</h1>
                        <h2>{activity.description}</h2>
                    </div>
                )
            })}
        </div>
    )
}
export default Activities