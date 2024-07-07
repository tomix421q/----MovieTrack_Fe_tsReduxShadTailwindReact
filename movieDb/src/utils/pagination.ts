type ConstructUrlParams = {
  pageNumber: number
  search: string
  pathname: string
}

export const constructUrl = ({ pageNumber, search, pathname }: ConstructUrlParams) => {
  const searchParams = new URLSearchParams(search)
  searchParams.set('page', pageNumber.toString())
  return `${pathname}?${searchParams.toString()}`
}

type ConstructPrevOrNextUrl = {
  currentPage: number
  pageCount?: number
  search: string
  pathname: string
}

export const constructPrevOrNextUrl = ({
  currentPage,
  //   pageCount,
  search,
  pathname,
}: ConstructPrevOrNextUrl): { prevUrl: string; nextUrl: string } => {
  let prevPage = currentPage - 1

  const prevUrl = constructUrl({ pageNumber: prevPage, search, pathname })

  let nextPage = currentPage + 1
  //   if(nextPage > null )
  const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname })
  return { prevUrl, nextUrl }
}
