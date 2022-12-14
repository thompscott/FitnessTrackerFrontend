import {
  getUserRoutines,
  deleteRoutine,
  deleteActivity
} from "../api";
import { useState, useEffect } from "react";
import React from "react";
import { CreateRoutine, AttachActivities, EditRoutine } from "./index";
import { Link } from "react-router-dom";

function MyRoutines(props) {
  const [username, token] = [props.username, props.token];
  const [routines, setRoutines] = useState([]);
  const [modifyRoutine, setModifyRoutine] = useState(false);
  const [modDelete, setModDelete] = useState(false);
  const [modEditAttAct, setModEditAttAct] = useState(0);
  const [modRout, setModRout] = useState(0);

  const userRout = async () => {
    if (token) {
      const userRoutines = await getUserRoutines(username, token);
      setRoutines(userRoutines);
    }
  };
  useEffect(() => {
    userRout();
  }, [modifyRoutine, modDelete, modEditAttAct, modRout]);

  return (
    <div className="myRoutines">
      <CreateRoutine token={token} setModifyRoutine={setModifyRoutine} />
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
                      <li><Link className="link" to={`/routines/activity/${activity.id}`}>{activity.name}</Link></li>
                      <ul>
                        <li>Description: {activity.description}</li>
                        <li>Count: {activity.count}</li>
                        <li>Duration: {activity.duration}</li>
                      </ul>
                    </ul>

                    {modEditAttAct === activity.routineActivityId ? (
                      <AttachActivities
                        setModEditAttAct={setModEditAttAct}
                        count={activity.count}
                        duration={activity.duration}
                        modEditAttAct={modEditAttAct}
                        routineId={routine.id}
                        activityId={activity.id}
                        routineActivityId={activity.routineActivityId}
                        token={token}
                        currActArr={currActArr}
                      />
                    ) : (
                      <div>
                        <button
                          onClick={() => {
                            setModEditAttAct(activity.routineActivityId);
                          }}
                        >
                          Edit Activity
                        </button>
                        <button
                          onClick={async () => {
                            await deleteActivity(
                              activity.routineActivityId,
                              token
                            );
                            setModDelete(!modDelete);
                          }}
                        >
                          Delete Activity
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {modEditAttAct === routine.id ? (
              <AttachActivities
                setModEditAttAct={setModEditAttAct}
                routineId={routine.id}
                currActArr={currActArr}
              />
            ) : null}
            {modRout === routine.id ? (
              <>
                <EditRoutine
                  token={token}
                  setModRout={setModRout}
                  name={routine.name}
                  goal={routine.goal}
                  isPublic={routine.isPublic}
                  routineId={routine.id}
                />
              </>
            ) : null}
            {modEditAttAct === routine.id || modRout === routine.id ? null : (
              <div className="myRoutinesBttn">
                <button
                  onClick={() => {
                    setModRout(routine.id);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={async () => {
                    await deleteRoutine(routine.id, token);
                    setModDelete(!modDelete);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setModEditAttAct(routine.id);
                  }}
                >
                  Attach Activities
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default MyRoutines;
