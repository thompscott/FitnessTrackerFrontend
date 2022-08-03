import React, { useEffect } from "react";
import { useState } from "react";
import { attachActivities, getActivities, editActivity } from "../api";

function AttachActivities(props) {
  const [count, setCount] = useState((props.count ? props.count : ''));
  const [duration, setDuration] = useState((props.duration ? props.duration : ''));
  const [message, setMessage] = useState("");
  const [activityList, setActivityList] = useState([]);
  const [activityId, setActivityId] = useState("");
  const [routineId, setModEditAttAct, modEditAttAct, routineActivityId, token] = [props.routineId, props.setModEditAttAct, props.modEditAttAct, props.routineActivityId, props.token];

  async function setAllActs() {
    const allActs = await getActivities()
    setActivityList(allActs)
  }

  useEffect(()=>{
    setAllActs();
  }, [])

  async function submitHandler(event) {
    event.preventDefault();
    if (modEditAttAct) {
      const result = await editActivity(
        routineActivityId,
        count,
        duration,
        token
      );
      console.log(result)
      setMessage(result.message);
    } else {
      const result = await attachActivities(
        routineId,
        activityId,
        count,
        duration
      );
      console.log(result)
      setMessage(result.message);
    }
    setModEditAttAct('')
  }
  //pass in routineId

  return (
    <div>
      <form className="attachActivity" onSubmit={submitHandler}>
        <h2>Attach Activities</h2>
        {console.log(modEditAttAct)}
        {(!modEditAttAct) ? <select
          name="activities"
          value={activityId}
          onChange={(event) => setActivityId(event.target.value)}
        >
          <option value="Choose activity below">Choose activity below</option>
          {activityList.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          ))}
        </select> : null}
        {/* <select
          name="activities"
          value={activity}
          onChange={(event) => setActivity(event.target.value)}
        >
          <option value="Choose activity below">Choose activity below</option>
          {activityList.map((activity) => (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select> */}
        <input
          type="text"
          placeholder="Count"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
        <button onClick={
          () => {
            setModEditAttAct('')
          }
        }>Cancel</button>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default AttachActivities;
