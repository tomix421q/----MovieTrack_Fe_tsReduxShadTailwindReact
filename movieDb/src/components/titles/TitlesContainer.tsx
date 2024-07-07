import { useLoaderData } from 'react-router-dom'
import { TitlesResponse } from '../../utils/type'
import TitlesList from './TitlesList'
import { Button } from '../ui/button'
import { LayoutGrid, List } from 'lucide-react'
import { useState } from 'react'
import { Separator } from '../ui/separator'

import TitlesGridList from './TitlesGridList'

function TitlesContainer() {
  const { entries } = useLoaderData() as TitlesResponse
  const [layout, setLayout] = useState<'grid' | 'list'>('grid')

  return (
    <>
      <section>
        <div className='flex max-w-6xl justify-end  items-center mt-8 mx-auto'>
          {/* SWITCH GRID AND LIST */}
          <div className='flex gap-x-4 mx-4'>
            <Button onClick={() => setLayout('grid')} size={'icon'} variant={layout === 'grid' ? 'default' : 'ghost'}>
              <LayoutGrid />
            </Button>
            <Button onClick={() => setLayout('list')} size={'icon'} variant={layout === 'list' ? 'default' : 'ghost'}>
              <List />
            </Button>
          </div>
        </div>
        <Separator className='mt-4' />
      </section>

      {/* TITLES  */}
      <div>
        {' '}
        {entries === 0 ? (
          <h5 className='text-2xl mt-16 '>Sorry,no titles matched your search...</h5>
        ) : layout === 'grid' ? (
          <TitlesGridList />
        ) : (
          <TitlesList />
        )}
      </div>
    </>
  )
}
export default TitlesContainer
