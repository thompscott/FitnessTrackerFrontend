import React from "react";
import { useState } from "react"
import { postActivities } from "../api"

function CreateActivity(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("")
  const [setModify] = [props.setModify]

  async function submitHandler(event) {
    event.preventDefault();
    setModify(true)
    const result = await postActivities(name, description)
    setMessage(result.message);
    if (!message) {
      setMessage("Activity Added");
    }
    setName("");
    setDescription("");
    setModify(false);
  }

  return (

    <div>
      <form className="createActivity" onSubmit={submitHandler}>
        <h2>Create Activity</h2>
        <label htmlFor='name'>Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor='description'>Description</label>
        <input
          id="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
        <p>{message}</p>
      </form>
    </div>
  );

}

export default CreateActivity;