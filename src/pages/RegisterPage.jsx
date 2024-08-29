import React, { useState,useContext } from 'react'
import styles from './RegisterPage.module.css'
import Form from '../components/Form'
import { AppContext } from '../context/AppContext'
import validateForm from '../utilities/ValidateForm'

export default function RegisterPage() {
  const {user, setUser} = useContext(AppContext);
  const[name, setName] = useState(user.name || " ")
  const[userName, setUserName]  = useState(user.userName || " ")
  const[email, setEmail] = useState(user.email || " ")
  const[mobile, setMobile] = useState(user.mobile || " ")
  const[error, setError] = useState(false)

  const submitHandler = () => {
    const{valid, invalid} = validateForm(name, userName, email, mobile);
    if(!valid) {
      setError(invalid)
      return;
    }
    setUser({name, userName, email, mobile});
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.background}></div>
        <div className={styles.label}>Discover new things on SuperApp</div>
      </div>
      <div className={styles.right}>
        <div className={styles.head}>
          <h1>Super app</h1>
          <h3>Create your new account</h3>
        </div>
        {/*Form*/}
        <Form 
            name={name}
            setName={setName}
            userName={userName}
            setUserName={setUserName}
            email={email}
            setEmail={setEmail}
            mobile={mobile}
            setMobile={setMobile}
            error={error}
            setError={setError}
            submitHandler={submitHandler}
          />
        <div className={styles.footer}>
          <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
          <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span> </p>
        </div>
      </div>
    </div>
  )
}
