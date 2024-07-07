import { NavLink } from 'react-router-dom'
import { links } from '../../utils'
import { useAppSelector } from '../../hooks'

function NavLinks() {
  const user = useAppSelector((state) => state.userState.user)
  return (
    <div className='hidden lg:flex justify-center items-center gap-x-4'>
      {links.map((link) => {
        const restrictedRoutes = link.href === 'profile'
        if (restrictedRoutes && !user) return null
        return (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) => {
              return `capitalize font-light tracking-wide  ${isActive ? 'border-b-amber-400 border-2' : ''}`
            }}
          >
            {link.label}
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks
