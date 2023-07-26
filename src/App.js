import React, {useState} from 'react'
import Login from './Login'
import ProfilePage from './ProfilePage'

const App = () => {

  // let age = 10;

  // if(age<10){
  //   console.log("Less than 10")

  // } else {

  //   console.log("Greater than or equal to 10")
  // }

  // (age<10) ? console.log("Less than 10") : console.log("Greater than or equal to 10")

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
    
    { loggedIn === true ? 
    <ProfilePage setLoggedIn={setLoggedIn}/> : 
    <Login setLoggedIn={setLoggedIn}/>}

    
    
    
    </>
  )
}

export default App