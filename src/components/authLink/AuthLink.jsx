import React from 'react'
import styles from './authLink.module.css'
import Link from 'next/link'


const AuthLink = () => {
  
  // Temp
  const status = "not authenticated"

  return (
  <>
    {status === "not authenticated" ? (
      <Link href="/login">Login</Link>
    ) : (
      <>
      <Link href="/write">Write</Link>
      <span className={styles.link}>Logout</span>
      </>
    )}
  </>
  )
}

export default AuthLink