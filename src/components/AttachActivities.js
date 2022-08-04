import React, { useEffect } from "react";
import { useState } from "react";
import { attachActivities, getActivities, editActivity } from "../api";

function AttachActivities(props) {
  const [count, setCount] = useState(props.count ? props.count : "");
  const [duration, setDuration] = useState(
    props.duration ? props.duration : ""
  );
  const [message, setMessage] = useState("");
  const [activityList, setActivityList] = useState([]);
  const [activityId, setActivityId] = useState("");
  const [routineId, setModEditAttAct, modEditAttAct, routineActivityId, token] =
    [
      props.routineId,
      props.setModEditAttAct,
      props.modEditAttAct,
      props.routineActivityId,
      props.token,
    ];

  async function setAllActs() {
    const allActs = await getActivities();
    setActivityList(allActs);
  }

  useEffect(() => {
    setAllActs();
  }, []);

  async function submitHandler(event) {
    event.preventDefault();
    if (modEditAttAct) {
      const result = await editActivity(
        routineActivityId,
        count,
        duration,
        token
      );

      if (result.message) {
        setMessage(
          "Cannot add activity (remember: activities cannot be attached twice)"
        );
      } else {
        setModEditAttAct("");
      }
    } else {
      const result = await attachActivities(
        routineId,
        activityId,
        count,
        duration
      );

      if (result.message) {
        setMessage(
          "Cannot add activity (remember: activities cannot be attached twice)"
        );
      } else {
        setModEditAttAct("");
      }
    }
  }

  return (
    <div>
      <form className="attachActivity" onSubmit={submitHandler}>
        {console.log(modEditAttAct)}
        {!modEditAttAct ? (
          <div>
            <h2>Attach Activities</h2>{" "}
            <label htmlFor='activities'>Activities</label>
            <select
              id="activities"
              name="activities"
              value={activityId}
              onChange={(event) => setActivityId(event.target.value)}
            >
              <option value="Choose activity below">
                Choose activity below
              </option>
              {activityList.map((activity) => (
                <option key={activity.id} value={activity.id}>
                  {activity.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <h2>Edit Activities</h2>
        )}
        <label htmlFor='count'>Count</label>
        <input
          id='count'
          title="Count"
          type="text"
          placeholder="Count"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <label htmlFor='duration'>Duration</label>
        <input
          id="duration"
          title="Duration"
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
        <button
          onClick={() => {
            setModEditAttAct("");
          }}
        >
          Cancel
        </button>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default AttachActivities;
