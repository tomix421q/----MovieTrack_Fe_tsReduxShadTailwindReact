import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Logo } from '.'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useToast } from './ui/use-toast'
import { logoutUser } from '../features/users/userSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const user = useAppSelector((state) => state.userState.user)

  const handleLogout = () => {
    dispatch(logoutUser())
    toast({ description: 'Logged out' })
    navigate('/')
  }

  return (
    <header>
      <div className='align-element flex justify-between py-2'>
        <Logo />
        {/* USER  */}
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
            <Button onClick={handleLogout} size={'sm'} variant={'destructive'}>
              Logout
            </Button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center '>
            <Button asChild variant={'link'} size={'sm'}>
              <Link to={'/login'}>Sign in / Guest</Link>
            </Button>
            <Button asChild variant={'link'} size={'sm'}>
              <Link to={'/register'}>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
