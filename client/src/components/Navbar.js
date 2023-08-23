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
      <ul>
        <li>
          <a
            href='/about'
            className='inline-flex items-center px-5 pt-5 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
          >
            About
          </a>
        </li>

        <li>
          <a
            href='/philosophy'
            className='inline-flex items-center px-5 pt-5 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
          >
            Our Philosophy
          </a>
        </li>

        <li>
          <a
            href='/testimonials'
            className='inline-flex items-center px-5 pt-5 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
          >
            Patient Testimonials
          </a>
        </li>

        <li>
          <a
            href='/trends'
            className='inline-flex items-center px-5 pt-5 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
          >
            Latest Trends
          </a>
        </li>
        <li>
          <a
            href='/resources'
            className='inline-flex items-center px-5 pt-5 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
          >
            Resources
          </a>
        </li>
      </ul>
    </nav>
  )
}
