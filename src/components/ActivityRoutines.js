import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getActivitityRoutines } from "../api";

function ActivityRoutines () {
    const { activityId } = useParams();
    const [routines, setRoutines] = useState([]);
    const actRout = async () => { 
        const actRoutines = await getActivitityRoutines(activityId);
        setRoutines(actRoutines);
      };
      useEffect(() => {
        actRout();
      }, [activityId]);
      
      return (
        <div className="myRoutines">
          {routines.map((routine) => {
            let currActArr = [];
            return (
              <div className="displayCard" key={routine.id}>
                <h1>{routine.name}</h1>
                <h2>Goal: {routine.goal}</h2>
                <h2>Creator: <Link className="link" to={`/routines/${routine.creatorName}`}>{routine.creatorName}</Link></h2>
                <div className="activityCard">
                  <h2>Activities:</h2>
                  {routine.activities.map((activity) => {
                    currActArr.push(activity.id);
                    return (
                      <div key={activity.id}>
                        <ul>
                          <li><Link className="link" to={`/routines/activity/${activity.id}`}>{activity.name}</Link></li>
                          <ul>
                            <li>Description: {activity.description}</li>
                            <li>Count: {activity.count}</li>
                            <li>Duration: {activity.duration}</li>
                          </ul>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
}
export default ActivityRoutines;