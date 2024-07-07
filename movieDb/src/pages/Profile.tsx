import { SectionTitle } from '../components'
import { useAppDispatch, useAppSelector } from '../hooks'
import { MenuState } from '../utils/type'
import { Button } from '../components/ui/button'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Film, FilmIcon, Star, X } from 'lucide-react'
import { removeFromFavorite, removeFromWatched, removeToWatch } from '../features/cart/cartSlice'

function Profile() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getStorage = localStorage.getItem('usermenu')
  const storageData: MenuState = getStorage ? JSON.parse(getStorage) : 'Empty'

  const user = useAppSelector((state) => state.userState.user)

  useEffect(() => {
    if (user === null) {
      return navigate('/login')
    }
  }, [])

  const numFavorite = useAppSelector((state) => state.cartState.favoriteTotal)
  const numToWatch = useAppSelector((state) => state.cartState.toWatchTotal)
  const numWatched = useAppSelector((state) => state.cartState.watchedTotal)

  const [showOnFavorite, setShowFavorite] = useState<boolean>(true)
  const [showOnToWatched, setShowToWatch] = useState<boolean>(false)
  const [showOnWatched, setShowWatched] = useState<boolean>(false)

  const handleToggleFavorite = () => {
    setShowFavorite(!showOnFavorite)
    setShowToWatch(false)
    setShowWatched(false)
  }
  const handleToggleToWatch = () => {
    setShowToWatch(!showOnToWatched)
    setShowFavorite(false)
    setShowWatched(false)
  }
  const handleToggleWatched = () => {
    setShowWatched(!showOnWatched)
    setShowFavorite(false)
    setShowToWatch(false)
  }
  const handleRemoveFavorite = (id: string) => {
    dispatch(removeFromFavorite(id))
  }
  const handleRemoveToWatch = (id: string) => {
    dispatch(removeToWatch(id))
  }
  const handleRemoveToWatched = (id: string) => {
    dispatch(removeFromWatched(id))
  }

  return (
    <section className='max-w-6xl mx-auto mt-10 px-2'>
      <SectionTitle text={'Profile'} />
      <div className='my-4 space-x-4'>
        <Button variant={`${showOnFavorite ? 'default' : 'outline'}`} onClick={handleToggleFavorite}>
          <Star className='mr-2 text-amber-300' /> Favorite titles
        </Button>
        <Button variant={`${showOnToWatched ? 'default' : 'outline'}`} onClick={handleToggleToWatch}>
          <FilmIcon className='mr-2 text-amber-300' />
          Titles to watch
        </Button>
        <Button variant={`${showOnWatched ? 'default' : 'outline'}`} onClick={handleToggleWatched}>
          <Film className='mr-2 text-amber-300' />
          Watched titles
        </Button>
      </div>

      <div>
        <div>
          {/* favorite data */}
          <div className={`${showOnFavorite ? 'block' : 'hidden'}`}>
            <h2 className='font-light text-4xl my-4'>
              Favorite Titles: <span>{numFavorite}</span>
            </h2>
            {storageData.favorite.map((favorite) => (
              <div key={favorite.id} className='sm:flex gap-5 items-center border mb-2 p-2 border-gray-700 rounded-lg'>
                <img src={favorite.primaryImage.url} alt={favorite.titleText.text} className='size-[120px]' />
                <p>{favorite.id}</p>
                <h3 className='font-bold capitalize text-2xl underline'>
                  <Link to={`/titles/${favorite.id}`}> {favorite.titleText.text}</Link>
                </h3>
                <p className='w-fit bg-emerald-300 h-fit p-1 rounded-lg text-black'>{favorite.titleType.text}</p>
                <Button size={'icon'} type='button' onClick={() => handleRemoveFavorite(favorite.id)}>
                  <X />
                </Button>
              </div>
            ))}
          </div>
          {/* toWatch data */}
          <div className={`${showOnToWatched ? 'block' : 'hidden'}`}>
            <h2 className='font-light text-4xl my-4'>
              To Watch Titles: <span>{numToWatch}</span>
            </h2>
            {storageData.toWatch.map((towatch) => (
              <div key={towatch.id} className='sm:flex gap-5 items-center border mb-2 p-2 border-gray-700 rounded-lg'>
                <img src={towatch.primaryImage.url} alt={towatch.titleText.text} className='size-[120px]' />
                <p>{towatch.id}</p>
                <h3 className='font-bold capitalize text-2xl underline'>
                  <Link to={`/titles/${towatch.id}`}> {towatch.titleText.text}</Link>
                </h3>
                <p className='w-fit bg-emerald-300 h-fit p-1 rounded-lg text-black'>{towatch.titleType.text}</p>
                <Button size={'icon'} type='button' onClick={() => handleRemoveToWatch(towatch.id)}>
                  <X />
                </Button>
              </div>
            ))}
          </div>
          {/* watched data */}
          <div className={`${showOnWatched ? 'block' : 'hidden'}`}>
            <h2 className='font-light text-4xl my-4'>
              Watched Titles: <span>{numWatched}</span>
            </h2>
            {storageData.watched.map((watched) => (
              <div key={watched.id} className='sm:flex gap-5 items-center border mb-2 p-2 border-gray-700 rounded-lg'>
                <img src={watched.primaryImage.url} alt={watched.titleText.text} className='size-[120px]' />
                <p>{watched.id}</p>
                <h3 className='font-bold capitalize text-2xl underline'>
                  <Link to={`/titles/${watched.id}`}> {watched.titleText.text}</Link>
                </h3>
                <p className='w-fit bg-emerald-300 h-fit p-1 rounded-lg text-black'>{watched.titleType.text}</p>
                <Button size={'icon'} type='button' onClick={() => handleRemoveToWatched(watched.id)}>
                  <X />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Profile
