import React from 'react'
import styles from "./Form.module.css"
import validateForm from '../utilities/ValidateForm'

function Form({name, setName, userName, setUserName, email, setEmail, mobile, setMobile, error, setError, submitHandler}) {

  return (
    <div className={styles.container}>
      <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/> <br />
      <input type="text" placeholder='UserName' value={userName} onChange={(e)=>setUserName(e.target.value)}/> <br />
      <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
      <input type="number" placeholder='Mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)}/> <br />
      <button onClick={submitHandler}>SIGN UP</button>
    </div>
  )
}

export default Form
