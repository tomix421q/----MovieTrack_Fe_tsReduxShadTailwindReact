import { AlignLeft } from 'lucide-react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { links } from '../../utils'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../hooks'

function LinksDropdown() {
  const user = useAppSelector((state) => state.userState.user)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='lg:hidden'>
        <Button variant={'outline'} size={'icon'}>
          <AlignLeft />
          <span className='sr-only'>Toggle links</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-52 lg:hidden bg-muted' align='center' sideOffset={15}>
        {links.map((link) => {
          const restrictedRoutes = link.href === 'profile'
          if (restrictedRoutes && !user) return null
          return (
            <DropdownMenuItem asChild key={link.label}>
              <NavLink
                to={link.href}
                className={({ isActive }) => {
                  return `capitalize  p-1 w-fit text-2xl ${isActive ? 'ring-1 ring-orange-500' : 'ring-1'}`
                }}
              >
                {link.label}
              </NavLink>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default LinksDropdown
