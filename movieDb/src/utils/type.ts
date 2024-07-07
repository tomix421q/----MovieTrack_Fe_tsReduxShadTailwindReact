export type TitlesResponse = {
  page: number
  next: string
  entries: number
  results: Title[]
}
export type Title = {
  id: string
  titleText: titleText
  primaryImage: primaryImage
  releaseDate: releaseDate
  ratingsSummary: ratingsSummary
  titleType: titleType
}
type titleText = {
  text: string
}
type primaryImage = {
  url: string
}
type releaseDate = {
  day: number
  month: number
  year: number
}
type ratingsSummary = {
  aggregateRating: number
  voteCount: number
}
type titleType = {
  text: string
}

// ___________________________________
export type SingleTitleResponse = {
  results: Title
}
//____________________________________
export type MenuItem = {
  id: string
  titleText: titleText
  primaryImage: primaryImage
  titleType: titleType
}

export type MenuState = {
  favorite: MenuItem[]
  favoriteTotal: number
  toWatch: MenuItem[]
  toWatchTotal: number
  watched: MenuItem[]
  watchedTotal: number
}

//_____________________________________

export type Pagination = {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export type Params = {
  search?: string
  genre?: string
  year?: string
  sort?: string
  titleType?: string
  limit?: number
  page?: string
}

export type TitlesResponseWithParams = TitlesResponse & { params: Params }
