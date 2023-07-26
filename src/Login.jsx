import React from 'react'

const Login = ({setLoggedIn}) => {

    function handleLogin(e){

        setLoggedIn(true)
    }

  return (
    <>
    
    <button onClick={handleLogin}>Log in</button>
    
    </>
  )
}

export default Login