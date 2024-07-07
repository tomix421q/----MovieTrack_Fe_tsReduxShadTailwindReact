import { BookmarkCheck, Clock9 } from 'lucide-react'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '../ui/menubar'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { useAppSelector } from '../../hooks'

type MenuBarActions = {
  handleAddToFavorite: () => void
  handleRemoveFavorite: () => void
  handleAddToWatch: () => void
  handleRemoveToWatch: () => void
  handleAddToWatched: () => void
  handleRemoveToWatched: () => void
  id: string
}

function MenuBarTitle({
  handleAddToFavorite,
  handleRemoveFavorite,
  handleAddToWatch,
  handleRemoveToWatch,
  handleAddToWatched,
  handleRemoveToWatched,
  id,
}: MenuBarActions) {
  //
  const isFavorite = useAppSelector((state) => state.cartState.favorite)
  const isToWatch = useAppSelector((state) => state.cartState.toWatch)
  const isWatched = useAppSelector((state) => state.cartState.watched)
  const findFav = isFavorite.some((i) => i.id === id)
  const findToWatch = isToWatch.some((i) => i.id === id)
  const findWatched = isWatched.some((i) => i.id === id)

  //
  return (
    <div className='flex flex-col md:flex-col  space-y-2 mt-4'>
      <Menubar className='w-fit'>
        {/*  */}
        {/* FAVORITE */}
        <MenubarMenu>
          <MenubarTrigger>
            <StarFilledIcon className='size-5 text-amber-400   mr-2' />
            <span>{findFav ? 'Remove' : 'Add'} Favorite</span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={handleAddToFavorite} disabled={findFav}>
              Add
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={handleRemoveFavorite} disabled={!findFav}>
              Remove
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      {/*  */}
      {/* TO WATCH */}
      <Menubar className='w-fit'>
        <MenubarMenu>
          <MenubarTrigger>
            <Clock9 className='size-5 text-amber-400 mr-2' />
            {findToWatch ? 'Remove from' : 'Add'} ToWatch
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={handleAddToWatch} disabled={findToWatch}>
              Add
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={handleRemoveToWatch} disabled={!findToWatch}>
              Remove
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      {/*  */}
      {/* WATCHED */}
      <Menubar className='w-fit sm:my-10'>
        <MenubarMenu>
          <MenubarTrigger>
            <BookmarkCheck className='size-5 text-amber-400 mr-2' />
            {findWatched ? 'Remove from' : 'Add to'} Watched
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={handleAddToWatched} disabled={findWatched}>
              Add
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={handleRemoveToWatched} disabled={!findWatched}>
              Remove
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
export default MenuBarTitle
