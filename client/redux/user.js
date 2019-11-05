import axios from 'axios'

//initial state
const initialState = {}

//action type
export const GET_USER = 'GET_USER'

//action creator
export const gotMe =(user)=> ({
  type: GET_USER,
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
    .then(() => dispatch(gotMe(initialState.user)))
    .catch(console.error.bind(console))
}

const userReducer =(state = initialState, action)=> {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}

export default userReducer;
