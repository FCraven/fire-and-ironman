import axios from 'axios'
import store from './store'

//initial state
const initialState = {}

//action type
const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

//action creator
export const gotMe =(user)=> ({
  type: GET_USER,
  user
})

export const logoutMe =(user)=> ({
  type: LOGOUT_USER,
  user
})

//thunks
export const getMe = () => dispatch => {
  return axios.get('/auth/me')
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console))
}

export const login = (formData) => dispatch => {
  return axios.put('/auth/login', formData)
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console))
}

export const logout = () => dispatch => {
  return axios.delete('/auth/logout')
    // .then(() => dispatch(gotMe(initialState)))
    .then(() => dispatch(logoutMe(initialState)))
    .then((console.log(`LOGOUT-->`,store.getState())))
    .catch(console.error.bind(console))
}

const userReducer =(state = initialState, action)=> {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.user
      }

    case LOGOUT_USER: {
      return {}
    }
    default:
      return state
  }
}

export default userReducer;
