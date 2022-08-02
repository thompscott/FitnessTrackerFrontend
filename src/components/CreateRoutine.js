
import React from "react";

function CreateRoutine () {
    const name = 'name';
    const goal = 'goal';

    return(
        
        <div>
          <form className="createRoutine" onSubmit={console.log("submit")}>
            <h2>Create Routine</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Goal"
              value={goal}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
            <p>{message}</p>
          </form>
        </div>
    );
    
}

export default CreateRoutine;