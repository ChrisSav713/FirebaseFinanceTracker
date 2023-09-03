// styles
import styles from './Navbar.module.css'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <a href='/land'>Logo</a>
        </li>

        {!user && (
          <>
            <li className=''>
              <a href='/login'>Login</a>
            </li>
            <li>
              <a href='/signup'>Signup</a>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}!</li>
            <li>
              <button className='btn' onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
