import React from 'react'
import styles from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <h3 className={styles.title}>Oops! Page Not Found</h3>
      <p className={styles.desc}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable</p>
      <Link className={styles.link} to="/">Go to Homepage</Link>
    </div>
  )
}
