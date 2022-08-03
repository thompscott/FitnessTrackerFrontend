
import React from "react";
import { useState } from "react";
import { createRoutine } from "../api"

function CreateRoutine(props) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false)
  const [token] = [props.token]
  const [message, setMessage] = useState("")

  async function submitHandler(event) {
    event.preventDefault()
    const result = await createRoutine(name, goal, isPublic, token)
    if (result.message) {
      setMessage(`There was an issue creating routine`)
    }

    console.log(result)
  }

  return (

    <div>
      <form className="createRoutine" onSubmit={submitHandler}>
        <h2>Create Routine</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Goal"
          value={goal}
          onChange={(e) => {
            setGoal(e.target.value);
          }}
        />
        <select
          name="visibility"
          value={isPublic}
          onChange={(event) => setIsPublic(event.target.value)}>
          <option value={false}>Private</option>
          <option value={true}>Public</option>
        </select>
        <button type="submit">Submit</button>
        <p>{message}</p>
      </form>
    </div>
  );

}

export default CreateRoutine;