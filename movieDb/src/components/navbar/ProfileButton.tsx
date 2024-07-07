import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { BookmarkCheck, Clock9, User } from 'lucide-react'
import { Separator } from '../ui/separator'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { useAppSelector } from '../../hooks'

function ProfileButton() {
  const numItemsInFavorite = useAppSelector((state) => state.cartState.favoriteTotal)
  const numItemsInToWatch = useAppSelector((state) => state.cartState.toWatchTotal)
  const numItemsInWatched = useAppSelector((state) => state.cartState.watchedTotal)
 

  return (
    <Button asChild variant={'outline'} size={'icon'} className='p-1 flex justify-center items-center relative w-auto'>
      <Link to={'/profile'} className='flex group gap-x-5'>
        <User className='mx-auto size-[1.5625rem]' />

        <div className='gap-x-3 hidden group-hover:lg:flex absolute -bottom-28 bg-primary p-4 rounded-md transition-all ease-in duration-100 text-secondary font-bold z-40'>
          <span className='text-center flex flex-col justify-center items-center gap-y-1'>
            <StarFilledIcon className='size-6 text-yellow-400' /> {numItemsInFavorite} Favorite
          </span>
          <Separator orientation='vertical' className='border border-secondary h-auto' />
          <span className='text-center flex flex-col justify-center items-center gap-y-1'>
            <Clock9 className='size-6 text-red-400' />
            {numItemsInToWatch} To watch
          </span>
          <Separator orientation='vertical' className='border border-secondary h-auto' />
          <span className=' text-center flex flex-col justify-center items-center gap-y-1'>
            <BookmarkCheck className='size-6 text-green-400' />
            {numItemsInWatched} Watched
          </span>
        </div>
      </Link>
    </Button>
  )
}
export default ProfileButton
