import { Form, Link, useLoaderData, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { TitlesResponseWithParams } from '../../utils/type'
import FormSelect from '../formComponents/FormSelect'
import { useEffect, useState } from 'react'
import { customFetch } from '../../utils'
import FormCheckBox from '../formComponents/FormCheckBox'

interface ApiResponse {
  results: string[]
}

function Filters() {
  const [genres, setGenres] = useState<string[]>([])
  const [titleTypes, setTitleTypes] = useState<string[]>([])

  const { params } = useLoaderData() as TitlesResponseWithParams
  // console.log(params)
  const {  genre, titleType } = params
  const navigate = useNavigate()

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await customFetch<ApiResponse>('/titles/utils/genres')

        setGenres(response.data.results)
      } catch (error) {
        console.log('Error fetch genres', error)
      }
    }
    fetchGenres()
  }, [])

  useEffect(() => {
    const fetchTitleTypes = async () => {
      try {
        const response = await customFetch<ApiResponse>('/titles/utils/titleTypes')

        setTitleTypes(response.data.results)
      } catch (error) {
        console.log('Error fetch title types', error)
      }
    }
    fetchTitleTypes()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const newParams: any = {}
    formData.forEach((value, key) => {
      if (value !== 'all' && value !== '') {
        if (key === 'sort' && value === 'on') {
          newParams[key] = 'year.incr'
        } else {
          newParams[key] = value
        }
      }
    })
    const queryParams = new URLSearchParams(newParams).toString()

    const url = queryParams ? `/titles?${queryParams}` : '/titles'
    navigate(url)
  }

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className='border rounded-md px-8 py-4 grid gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center mt-10'
      >
        {/* SELECT FROM GENRES */}
        <FormSelect name={'genre'} options={genres} label='select genres' defaultValue={genre} />

        {/* SELECT FROM TITLE TYPE */}
        <FormSelect name={'titleType'} options={titleTypes} label='select title type' defaultValue={titleType} />

        {/* Search */}
        <Button type='submit' size={'sm'} className='self-end mb-2'>
          Search
        </Button>

        {/* RESET  */}
        <Button type='button' asChild size={'sm'} variant={'outline'} className='self-end mb-2'>
          <Link to={'/titles'}>Reset</Link>
        </Button>
        {/* ISNEWEST */}
        <FormCheckBox name={'sort'} defaultValue={params.sort} label='Sort by newest'></FormCheckBox>
      </Form>
    </div>
  )
}
export default Filters
