import { LoaderFunction, useLoaderData } from 'react-router-dom'
import { MenuItem, SingleTitleResponse } from '../utils/type'
import {
  addToFavorite,
  addToWatch,
  addToWatched,
  removeFromFavorite,
  removeFromWatched,
  removeToWatch,
} from './../features/cart/cartSlice'
import { customFetch } from '../utils'
import { Separator } from '../components/ui/separator'
import { MenuBarTitle } from '../components'
import { useAppDispatch } from '../hooks'

export const loader: LoaderFunction = async ({ params }): Promise<SingleTitleResponse> => {
  const response = await customFetch<SingleTitleResponse>(`/titles/${params.id}`)
  return { ...response.data }
}

function SingleTitle() {
  const dispatch = useAppDispatch()
  //
  const { results: title } = useLoaderData() as SingleTitleResponse
  const { titleText, primaryImage, releaseDate, titleType, id } = title
  //   console.log(title)

  const profileItem: MenuItem = {
    id: id,
    titleText: titleText,
    primaryImage: primaryImage,
    titleType: titleType,
  }

  const handleAddToFavorite = () => {
    dispatch(addToFavorite(profileItem))
  }
  const handleRemoveFavorite = () => {
    dispatch(removeFromFavorite(profileItem.id))
  }

  const handleAddToWatch = () => {
    dispatch(addToWatch(profileItem))
  }
  const handleRemoveToWatch = () => {
    dispatch(removeToWatch(id))
  }

  const handleAddToWatched = () => {
    dispatch(addToWatched(profileItem))
  }
  const handleRemoveToWatched = () => {
    dispatch(removeFromWatched(id))
  }

  return (
    <div className='grid sm:grid-cols-2 max-w-6xl mx-auto gap-10 mt-20 px-4'>
      <div className='flex sm:h-[25rem]'>
        {primaryImage && primaryImage.url ? (
          <img
            src={primaryImage.url}
            alt={titleText.text}
            width={300}
            loading='lazy'
            className='rounded-md h-[15.625rem]  w-full object-contain'
          />
        ) : (
          <img src='/noImage.jpg' alt='no image' width={300} className='rounded-md h-[15.625rem] w-full object-contain' />
        )}
        <Separator orientation='vertical' />
      </div>
      <div>
        <h1 className='text-3xl md:text-5xl text-amber-300 font-extrabold tracking-wider'>{titleText.text}</h1>
        <div>
          {releaseDate == null ? (
            'No Release date'
          ) : (
            <p className='mt-auto text-emerald-300 sm:text-2xl tracking-wider'>
              Release date: {releaseDate.day && releaseDate ? releaseDate.day : 'X'}.
              {releaseDate.month && releaseDate ? releaseDate.month : 'X'}.
              {releaseDate.year && releaseDate ? releaseDate.year : 'xxxx'}
            </p>
          )}
        </div>

        {/* MENU BAR  */}
        <MenuBarTitle
          handleAddToFavorite={handleAddToFavorite}
          handleRemoveFavorite={handleRemoveFavorite}
          handleAddToWatch={handleAddToWatch}
          handleRemoveToWatch={handleRemoveToWatch}
          handleAddToWatched={handleAddToWatched}
          handleRemoveToWatched={handleRemoveToWatched}
          id={id}
        />
        {/*  */}
        <div className='flex flex-grow' />
        <Separator className='mt-6' />
      </div>
    </div>
  )
}
export default SingleTitle
