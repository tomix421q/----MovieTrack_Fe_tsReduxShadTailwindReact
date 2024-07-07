import { MenuItem } from './../../utils/type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuState } from '../../utils/type'
import { toast } from '../../components/ui/use-toast'

const defaultState: MenuState = {
  favorite: [],
  favoriteTotal: 0,
  toWatch: [],
  toWatchTotal: 0,
  watched: [],
  watchedTotal: 0,
}

const getCartFromLocalStorage = (): MenuState => {
  const usermenu = localStorage.getItem('usermenu')
  return usermenu ? JSON.parse(usermenu) : defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addToFavorite: (state, action: PayloadAction<MenuItem>) => {
      const newItem = action.payload
      const item = state.favorite.find((i) => i.id === newItem.id)
      if (item) {
        toast({ description: 'Title is already in favorite folder...' })
      } else {
        state.favorite.push(newItem)
        state.favoriteTotal += 1
        localStorage.setItem('usermenu', JSON.stringify(state))
        toast({ description: 'Title added to favorite...' })
      }
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      const titleId = action.payload
      const title = state.favorite.find((i) => i.id === titleId)
      if (!title) return
      state.favorite = state.favorite.filter((i) => i.id !== titleId)
      state.favoriteTotal -= 1
      localStorage.setItem('usermenu', JSON.stringify(state))
      toast({ description: 'Item removed from your profile...' })
    },
    addToWatch: (state, action: PayloadAction<MenuItem>) => {
      const newItem = action.payload
      const item = state.toWatch.find((i) => i.id === newItem.id)
      if (item) {
        toast({ description: 'Title is already in to watch folder...' })
      } else {
        state.toWatch.push(newItem)
        state.toWatchTotal += 1
        localStorage.setItem('usermenu', JSON.stringify(state))
        toast({ description: 'Title added to toWatch section...' })
      }
    },
    removeToWatch: (state, action: PayloadAction<string>) => {
      const titleId = action.payload
      const title = state.toWatch.find((i) => i.id === titleId)
      if (!title) return
      state.toWatch = state.toWatch.filter((i) => i.id !== titleId)
      state.toWatchTotal -= 1
      localStorage.setItem('usermenu', JSON.stringify(state))
      toast({ description: 'Item removed from your towatch section...' })
    },
    addToWatched: (state, action: PayloadAction<MenuItem>) => {
      const newItem = action.payload
      const item = state.watched.find((i) => i.id === newItem.id)
      if (item) {
        toast({ description: 'Title is already in watched folder...' })
      } else {
        state.watched.push(newItem)
        state.watchedTotal += 1
        localStorage.setItem('usermenu', JSON.stringify(state))
        toast({ description: 'Title added to watched section...' })
      }
    },
    removeFromWatched: (state, action: PayloadAction<string>) => {
      const titleId = action.payload
      const title = state.watched.find((i) => i.id === titleId)
      if (!title) return
      state.watched = state.watched.filter((i) => i.id !== titleId)
      state.watchedTotal -= 1
      localStorage.setItem('usermenu', JSON.stringify(state))
      toast({ description: 'Item removed from your watched section...' })
    },
  },
})

export const { addToFavorite, removeFromFavorite, addToWatch, removeToWatch, addToWatched, removeFromWatched } = cartSlice.actions
export default cartSlice.reducer
