import React from 'react'

const ErrMsg = ({ errMsg, closeErrMsg }) => {
  const style = {
    infoContainer: {
      display: 'flex',
      position: 'absolute',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50%',
      width: '50%',
      backgroundColor: 'slateGrey',
      border: '2px solid grey',
      borderRadius: '3em',
      color: ''
    },
    errText: {
      backgroundColor: 'purple',
      padding: '1%',
      margin: 'auto'
    }
  }

  return (
      <div style={style.infoContainer} onClick={closeErrMsg}>
        <div id='errText' style={style.errText}>{errMsg}</div>
        <button type='button'> Try Again </button>
      </div>
  )
}

export default ErrMsg;
