
import React from "react";
import { useState } from "react";

function CreateRoutine () {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

    return(
        
        <div>
          <form className="createRoutine" onSubmit={console.log("submit")}>
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
            <button type="submit">Submit</button>
          </form>
        </div>
    );
    
}

export default CreateRoutine;