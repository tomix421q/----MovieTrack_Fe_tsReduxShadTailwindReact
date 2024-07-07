import LinksDropdown from './LinksDropdown'
import ModeToggle from './ModeToggle'
import NavLinks from './NavLinks'
import ProfileButton from './ProfileButton'

function Navbar() {
  return (
    <nav className='bg-muted py-4 '>
      <div className='align-element flex justify-between items-center'>
        <NavLinks />
        <LinksDropdown />

        <div className='flex justify-center items-center gap-x-4'>
          <ModeToggle />
          <ProfileButton />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
