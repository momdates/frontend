import axios from "axios";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signup = creds => dispatch => {
  console.log("creds:", creds);
  let formatCreds = {};
  creds.forEach(cred => (formatCreds = { ...formatCreds, ...cred }));
  console.log("formatted creds:", formatCreds);
  dispatch({ type: SIGNUP_START });
  return axios
    .post(`https://momdate-app.herokuapp.com/newuser`, formatCreds, {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.data });
    });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  // console.log(creds)
  dispatch({ type: LOGIN_START });
  return fetch("https://momdate-app.herokuapp.com/oauth/token", {
    body: `grant_type=password&username=${creds.username}&password=${
      creds.password
    }`,
    headers: {
      Authorization: "Basic bW9tZGF0ZS1jbGllbnQ6bW9tZGF0ZS1zZWNyZXQ=",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  })
    .then(res => res.json())
    .then(res => {
      localStorage.setItem("token", res.access_token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.access_token });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.data });
    });
};

export const ADD_EVENT_START = "ADD_EVENT_START";
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS";
export const ADD_EVENT_FAILURE = "ADD_EVENT_FAILURE";

export const addevent = event => dispatch => {
  let formatEvent = {};
  event.forEach(e => (formatEvent = { ...formatEvent, ...e }));
  dispatch({ type: ADD_EVENT_START });
  return axios
    .post("https://momdate-app.herokuapp.com/newexp", formatEvent, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      console.log("res.data:", res.data);
      dispatch({ type: ADD_EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: ADD_EVENT_FAILURE, payload: err.response });
      }
    });
};

export const EDIT_EVENT_START = "EDIT_EVENT_START";
export const EDIT_EVENT_SUCCESS = "EDIT_EVENT_SUCCESS";
export const EDIT_EVENT_FAILURE = "EDIT_EVENT_FAILURE";

export const editevent = (id, event) => dispatch => {
  console.log("event:", event);
  dispatch({ type: EDIT_EVENT_START });
  return axios
    .put(`https://momdate-app.herokuapp.com/exp/${id}`, event, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      dispatch({ type: EDIT_EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: EDIT_EVENT_FAILURE, payload: err.response });
      }
    });
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const USER_UNAUTHORIZED = "FETCH_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  return axios
    .get(`https://momdate-app.herokuapp.com/experiences/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      }
    });
};

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const deleteEvent = id => dispatch => {
  console.log(id);
  dispatch({ type: DELETE_START });
  return axios
    .delete(`https://momdate-app.herokuapp.com/exp/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      console.log("res data:", res);
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("call failed: ", err.response);
      if (err.response === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: DELETE_FAILURE, payload: err.response });
      }
    });
};

export const VIEW_EVENT_START = "VIEW_EVENT_START";
export const VIEW_EVENT_SUCCESS = "VIEW_EVENT_SUCCESS";
export const VIEW_EVENT_FAILURE = "VIEW_EVENT_FAILURE";

export const viewEvent = (expid, event) => dispatch => {
  let formatEvent = event.find(event => event.expid === expid);

  dispatch({ type: VIEW_EVENT_START });
  return axios
    .get(`https://momdate-app.herokuapp.com/experience/${formatEvent.expid}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      // console.log(res)
      dispatch({ type: VIEW_EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: VIEW_EVENT_FAILURE, payload: err.response });
      }
    });
};
