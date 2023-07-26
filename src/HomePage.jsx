import React from 'react'

const HomePage = ({age, setAge}) => {
  return (
    <>
    
    <h3>This is my Homepage Component</h3>
    <p>The individual is {age} years old</p>
    
    <button onClick={e=>{setAge(5)}}> Change Age</button>

    </>
  )
}

export default HomePage