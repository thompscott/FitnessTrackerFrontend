import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPublicUserRoutines, getUserRoutines } from "../api";

function UserRoutines (props) {
    const { user } = useParams();
    const [routines, setRoutines] = useState([]);
    const userRout = async () => { 
        const userRoutines = await getPublicUserRoutines(user);
        setRoutines(userRoutines);
      };
      useEffect(() => {
        userRout();
      }, []);
      
      return (
        <div className="myRoutines">
          {routines.map((routine) => {
            let currActArr = [];
            return (
              <div className="displayCard" key={routine.id}>
                <h1>{routine.name}</h1>
                <h2>Goal: {routine.goal}</h2>
                <h2>Creator: {routine.creatorName}</h2>
                <div className="activityCard">
                  <h2>Activities:</h2>
                  {routine.activities.map((activity) => {
                    currActArr.push(activity.id);
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
export default UserRoutines

