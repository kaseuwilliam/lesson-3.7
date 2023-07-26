import React,{useState} from 'react'
import HomePage from './HomePage'

const ProfilePage = ({setLoggedIn}) => {

    function handleLogin(e){

        setLoggedIn(false)
    }

    let [age, setAge] = useState(11);

  return (
    <>

    <h2>This is the Profile Page</h2>

    { age>=10 && <HomePage age={age} setAge={setAge}/>}
    

    <button onClick={handleLogin}>Log Out</button>


    </>
  )
}

export default ProfilePage