import axios from 'axios';
import { useResolvedPath } from 'react-router-dom';

const url = "https://desolate-wave-08610.herokuapp.com/api"

export const userRegistration = async (username, password) => {
  const response = await fetch(`${url}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const result = await response.json();
  return result;
};

export const userLogin = async (username, password) => {
  const response = await fetch(`${url}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  const result = await response.json();
  return result;
};

export const publicRoutines = async () => {
  const response = await fetch(`${url}/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  const result = await response.json();
  return result;
}

export const getUserRoutines = async (username, token) => {
  const response = await fetch(`${url}/users/${username}/routines`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
  })
  const result = await response.json();
  return result
}

export const getActivities = async () => {
  const response = await fetch(`${url}/activities`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  const result = await response.json();
  return result
}

export const postActivities = async (name, description) => {
  const response = await fetch(`${url}/activities`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      'name': name,
      'description': description,
    })
  })
  const result = await response.json()
  return result
}

export const attachActivities = async (routineId, activityId, count, duration) => {
  const response = await fetch(`${url}/routines/${routineId}/activities`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      activityId: activityId,
      count: count,
      duration: duration
    })
  })
  const result = await response.json()
  return result
}

export const createRoutine = async (name, goal, isPublic, token) => {
  const response = await fetch(`${url}/routines`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    method: "POST",
    body: JSON.stringify({
      name: name,
      goal: goal,
      isPublic: isPublic
    })
  })
  const result = await response.json()
  return result
}

export const deleteRoutine = async (routineId, token) => {
  const response = await fetch(`${url}/routines/${routineId}`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    method: "DELETE",
  })
  const result = await response.json()
  return result
}

export const deleteActivity = async (routineActivityId, token) => {
  const response = await fetch(`${url}/routine_activities/${routineActivityId}`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    method: "DELETE",
  })
  const result = await response.json()
  return result
}

export const editActivity = async (routineActivityId, count, duration, token) => {
  const response = await fetch(`${url}/routine_activities/${routineActivityId}`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    method: "PATCH",
    body: JSON.stringify({
      count: count,
      duration: duration
    }),
  })
  const result = await response.json()
  return result
}

export const editRoutine = async (routineId, name, goal, isPublic, token) => {
  const response = await fetch(`${url}/routines/${routineId}`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      goal: goal,
      isPublic: isPublic
    }),
  })
  const result = await response.json()
  return result
}