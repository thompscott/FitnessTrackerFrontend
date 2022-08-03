import React from "react";
import { useState } from "react";
import { attachActivities, getActivities } from "../api";

function AttachActivities(props) {
  const [count, setCount] = useState((props.count ? props.count : ''));
  const [duration, setDuration] = useState((props.duration ? props.duration : ''));
  const [message, setMessage] = useState("");
  const [activityList, setActivityList] = useState([]);
  const [activity, setActivity] = useState("");
  const [rountineId, setModEditAttAct, modEditAttAct] = [props.routineId, props.setModEditAttAct, props.modEditAttAct];

  async function setAllActs() {
    const allActs = await getActivities()
    setActivityList(allActs)
  }

  setAllActs()

  async function submitHandler(event) {
    event.preventDefault();
    const result = await attachActivities(
      routineId,
      activityId,
      count,
      duration
    );
    setMessage(result.message);
  }
  //pass in routineId

  return (
    <div>
      <form className="attachActivity" onSubmit={submitHandler}>
        <h2>Attach Activities</h2>
        {(modEditAttAct === '') ? <select
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
