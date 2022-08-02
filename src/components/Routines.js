import { publicRoutines } from "../api"
import { useState, useEffect} from "react"
import React from "react"

function Routines (){
    const [routines, setRoutines] = useState([]);
   const pubRout = async () => {
    const routines = await publicRoutines () 
    setRoutines(routines)  
   } 
   useEffect(() => {pubRout()})
   
   return (
    <div>
        {routines.map((routine, id) => {
            return (
                <div key={routine.id}>
                    <h1>{routine.name}</h1>
                    

                </div>
            )
        })}
    </div>
   )}
export default Routines