import { LoaderFunction, useLoaderData } from 'react-router-dom'
import { Featured, Hero } from '../components'
import { TitlesResponse } from '../utils/type'
import { customFetch } from '../utils'

const url = `/titles/x/upcoming?page=1`
export const loader: LoaderFunction = async (): Promise<TitlesResponse> => {
  const response = await customFetch<TitlesResponse>(url)
  return { ...response.data }
}

function Landing() {
  const result = useLoaderData() as TitlesResponse
  console.log(result)

  return (
    <div className='max-w-6xl mx-auto px-2'>
      <Hero />
      <Featured />
    </div>
  )
}
export default Landing
