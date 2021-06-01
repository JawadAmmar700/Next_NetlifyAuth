import React, { useEffect } from 'react'
import { useStateValue } from '../Store'
import netlifyIdentity from 'netlify-identity-widget'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    netlifyIdentity.on('login', user => {
      dispatch({ type: 'Add_User', auth: user })
    })
    netlifyIdentity.on('logout', () => {
      dispatch({ type: 'Remove', auth: null })
      netlifyIdentity.close()
    })
    netlifyIdentity.init()

    return () => {
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
    }
  }, [])

  const handleClick = () => {
    netlifyIdentity.open()
  }
  const handleSignOut = () => {
    netlifyIdentity.logout()
  }

  return (
    <div className={styles.header}>
      <h1>Welcome {user ? user.user_metadata.full_name : 'Guest'}</h1>
      <div className={styles.navigation}>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/ViewContent">
          <p>View Content</p>
        </Link>
      </div>
      <div>
        <button className={styles.a} onClick={handleSignOut}>
          Log out
        </button>
        <button className={styles.btn} onClick={handleClick}>
          Log In/Sign up
        </button>
      </div>
    </div>
  )
}

export default Header
