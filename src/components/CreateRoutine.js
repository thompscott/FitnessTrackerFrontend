
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
  }

  return (

    <div>
      <form className="createRoutine" onSubmit={submitHandler}>
        <h2>Create Routine</h2>
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input
            minLength={1}
            id='name'
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          /></fieldset>
        <fieldset>
          <label htmlFor='goal'>Goal</label>
          <input
            minLength={1}
            id="goal"
            type="text"
            placeholder="Goal"
            value={goal}
            onChange={(e) => {
              setGoal(e.target.value);
            }}
          /></fieldset>
        <fieldset>
          <label htmlFor="visibility">Visibility</label>
          <select
            id="visibility"
            name="visibility"
            value={isPublic}
            onChange={(event) => setIsPublic(event.target.value)}>
            <option value={false}>Private</option>
            <option value={true}>Public</option>
          </select></fieldset>
        <fieldset>
          <button type="submit">Submit</button>
          <p>{message}</p>
        </fieldset>
      </form>
    </div>
  );

}

export default CreateRoutine;