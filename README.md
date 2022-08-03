# FitnessTrackerFrontend
add

routine:
isPublic,
name,
goal


activities:
name,
description

routine_activity:
count,
duration,
activityId,
routineId





Fill out routine form
have useState to attach activities[]
map existingActivities for display
AddActivity Button on submit{
    setAttachActivities(attachActivities.push(activityObject{activityId, name, count, duration}))
}
refresh map existingActivities for display

onSubmit{
    Create Routine get back routineid
    map.attachActivities(
        attach activities with routineid, activityObject
    )
    
}