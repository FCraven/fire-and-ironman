//initial state
const initialState = {
  user: {}
}

//action type
const GET_USER = 'GET_USER'

//action creator
const gotMe =(user)=> ({
  type: GET_USER,
  user
})

const userReducer =(state = initialState, action)=> {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default userReducer;
