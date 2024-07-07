import { LoaderFunction } from 'react-router-dom'
import { Filters, PaginationContainer, TitlesContainer } from '../components'
import { TitlesResponse, TitlesResponseWithParams } from '../utils/type'
import { customFetch } from '../utils'

const url = '/titles?info=base_info&limit=18'

export const loader: LoaderFunction = async ({ request }): Promise<TitlesResponseWithParams> => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  let response

  if (params.search) {
    response = await customFetch<TitlesResponse>(url + `/search/akas/${params.search}`)
  } else {
    response = await customFetch<TitlesResponse>(url, { params })
  }
  // console.log(response, params, 'bum')
  return { ...response.data, params }
}

function Titles() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Filters />
      <TitlesContainer />
      <PaginationContainer />
    </div>
  )
}
export default Titles
