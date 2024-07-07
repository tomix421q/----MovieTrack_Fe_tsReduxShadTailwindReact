import { useLoaderData, useLocation } from 'react-router-dom'
import { TitlesResponseWithParams } from '../../utils/type'
import { constructPrevOrNextUrl, constructUrl } from '../../utils'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'

function PaginationContainer() {
  const { page, next } = useLoaderData() as TitlesResponseWithParams
  const { search, pathname } = useLocation()

  // const pages = Array.from({ length: 10 }, (_, index) => index + 1)

  // if (next === null) return null

  // const renderPagination = pages.map((pageNumber) => {
  //   const isActive = pageNumber === page
  //   const url = constructUrl({ pageNumber, search, pathname })

  //   return (
  //     <PaginationItem key={page}>
  //       <PaginationLink to={url} isActive={isActive} size={undefined}>
  //         {page}
  //       </PaginationLink>
  //     </PaginationItem>
  //   )
  // })

  //COMPLEX PAGINATION
  const constructButton = ({ pageNumber, isActive }: { pageNumber: number; isActive: boolean }): React.ReactNode => {
    const url = constructUrl({ pageNumber, search, pathname })
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive} size={'lg'}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    )
  }

  const constructEllipsis = (key: string): React.ReactNode => {
    return (
      <PaginationItem key={key}>
        <PaginationEllipsis />
      </PaginationItem>
    )
  }
 
  const renderPagination = () => {
    let pages: React.ReactNode[] = []
    // first page
    pages.push(constructButton({ pageNumber: 1, isActive: page == 1 }))
    //ellipsis
    if (page > 2) {
      pages.push(constructEllipsis('dots-1'))
    }
    //active page
    if (Number(page) !== 1) {
      pages.push(constructButton({ pageNumber: page, isActive: true }))
    }
    //ellipsis
    if (next !== null) {
      pages.push(constructEllipsis('dots-2'))
    }
    //last page
    // if (next === null) {
    //   pages.push(constructButton({ pageNumber: 1, isActive: page.toString() === (next === null && 'last') }))
    // }

    return pages
  }

  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: Number(page),
    search,
    pathname,
  })
  // console.log(search, pathname,page)

  return (
    <Pagination className='my-4'>
      <PaginationContent>
        <PaginationItem>{page === 1 ? '' : <PaginationPrevious to={prevUrl} size={'lg'} />}</PaginationItem>
        {renderPagination()}
        <PaginationItem>{next == null ? '' : <PaginationNext to={nextUrl} size={'lg'} />}</PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
export default PaginationContainer
