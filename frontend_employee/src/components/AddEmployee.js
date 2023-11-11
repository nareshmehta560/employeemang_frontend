import React, { useState } from 'react'

const AddEmployee = () => {
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')

    const[email,setEmail] = useState('')

  return (
    <div> 
        <h1>Add new Employee</h1>
        <input>enter firstname</input>
        <input>enter last name</input>
        <input>enter email</input>

    </div>
  )
}

export default AddEmployee