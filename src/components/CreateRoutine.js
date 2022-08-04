
import React from "react";
import { useState } from "react";
import { createRoutine } from "../api"

function CreateRoutine(props) {
  const [token, setModifyRoutine] = [props.token, props.setModifyRoutine]
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false)
  const [message, setMessage] = useState("")

  async function submitHandler(event) {
    event.preventDefault()
    setModifyRoutine(true);
    const result = await createRoutine(name, goal, isPublic, token)
    console.log(result);
    if (result.message === "duplicate key value violates unique constraint \"routines_name_key\"") {
      setMessage(`A routine with name ${name} already exists`);
    }
    else {
      if (result.message) {
        setMessage(result.message);
      }
      else {
        setMessage("Routine Added");
        setName("");
        setGoal("");
        setIsPublic(false);
        setModifyRoutine(false);
      }

    }

    console.log(result)
  }

  return (

    <div>
      <form className="createRoutine" onSubmit={submitHandler}>
        <h2>Create Routine</h2>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor='goal'>Goal</label>
        <input
          id="goal"
          type="text"
          placeholder="Goal"
          value={goal}
          onChange={(e) => {
            setGoal(e.target.value);
          }}
        />
        <label htmlFor="visibility">Visibility</label>
        <select
          id="visibility"
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