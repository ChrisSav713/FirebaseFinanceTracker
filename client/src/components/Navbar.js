// styles
import styles from './Navbar.module.css'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {
  const { logout } = useLogout()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>

        <li className=''>
          <a href='/login'>Login</a>
        </li>
        <li>
          <a href='/signup'>Signup</a>
        </li>
        <li>
          <button className='btn' onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
