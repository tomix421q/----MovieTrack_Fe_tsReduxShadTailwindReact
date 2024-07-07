import { Clapperboard } from 'lucide-react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div className='flex flex-row'>
      <Link to={'/'}>
        <Clapperboard className='text-yellow-500 size-[2.1875rem]' />
      </Link>
      <span className='hidden md:flex items-center  justify-center mx-2 tracking-widest'><span className='text-yellow-500'>M</span>ovie <span className='text-yellow-500'>T</span>rack</span>
      <span className='sr-only'>Logo</span>
    </div>
  )
}
export default Logo
