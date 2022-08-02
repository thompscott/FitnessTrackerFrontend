import React from "react";
import { useState } from "react"

function CreateActivity () {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    function submitHandler (event) {
        event.preventDefault;
        
    }

    return(
        
        <div>
          <form className="createActivity" onSubmit={submitHandler()}>
            <h2>Create Activity</h2>
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
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
    );
    
}

export default CreateActivity;