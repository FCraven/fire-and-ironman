import React from 'react'

const GoogleLogin =()=> {
  return (
     <form method='get' action='/auth/google'>
        <button type='submit'>
                Login with Google
        </button>
      </form>
  )
}

export default GoogleLogin;
