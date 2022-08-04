import React from 'react'
import { useState, useEffect } from 'react'
import { editRoutine } from '../api'



function EditRoutine(props) {
    const [name, setName] = useState(props.name ? props.name : "")
    const [goal, setGoal] = useState(props.goal ? props.goal : "")
    const [isPublic, setIsPublic] = useState(props.isPublic ? props.isPublic : false)
    const [token, setModRout, routineId] = [props.token, props.setModRout, props.routineId]
    const [message, setMessage] = useState('')

    async function submitHandler(event) {
        event.preventDefault()
        const result = await editRoutine(routineId, name, goal, isPublic, token)
        if (result.message === "duplicate key value violates unique constraint \"routines_name_key\"") {
            setMessage(`A routine with name ${name} already exists`);
        }
        else {
            if (result.message) {
                setMessage(result.message);
            }
            else {
                setMessage("Routine Changed");
                setModRout(0);
            }
        }
    }

    return (
        <div>
            <form className="editRoutine" onSubmit={submitHandler}>
                <h2>Edit Routine</h2>
                <fieldset>
                    <label htmlFor='name'>Name</label>
                    <input
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
                    <button onClick={() => {
                        setModRout(0);
                    }


                    }>Cancel</button>
                    <p>{message}</p>
                </fieldset>
            </form>
        </div>
    );

}

export default EditRoutine;