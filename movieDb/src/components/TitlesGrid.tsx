import { Link, useLoaderData } from 'react-router-dom'
import { TitlesResponse } from '../utils/type'
import { Card, CardContent } from './ui/card'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { useState } from 'react'
import { ArrowDownFromLine, ArrowUpFromLine } from 'lucide-react'

function TitlesGrid() {
  const [more, setMore] = useState<boolean>(false)
  const { results: titles } = useLoaderData() as TitlesResponse

  return (
    <div>
      <div className='pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl  mx-auto '>
        {titles.map((title, index) => {
          const { id, titleText, primaryImage, releaseDate } = title

          if ((more === false && index < 6) || more === true) {
            return (
              <Link to={`/titles/${title.id}`} key={id} className='relative'>
              
                <Card className='bg-primary-foreground rounded-md '>
                  <CardContent className='p-4 hover:ring-2 ease-in duration-100'>
                    {primaryImage && primaryImage.url ? (
                      <img
                        src={primaryImage.url}
                        alt={titleText.text}
                        width={300}
                        loading='lazy'
                        className='rounded-md h-64 md:h-48 w-full object-contain'
                      />
                    ) : (
                      <img
                        src='/noImage.jpg'
                        alt='no image'
                        width={300}
                        className='rounded-md h-64 md:h-48 w-full object-contain'
                      />
                    )}

                    <div className='mt-4 text-center min-h-[8.125rem] space-y-4 flex justify-end flex-col'>
                      <h1 className='text-xl font-semibold capitalize'>{titleText.text}</h1>
                      <Separator />
                      <p>
                        Release date: {releaseDate.day}.{releaseDate.month}.{releaseDate.year}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          }
          return null
        })}
      </div>
      <div className='w-1/3 mx-auto'>
        {more === false ? (
          <Button
            variant={'secondary'}
            onClick={() => setMore(!more)}
            size={'lg'}
            className='flex mx-auto my-10 tracking-widest sm:text-3xl p-6 w-full'
          >
            <ArrowDownFromLine size={35} className='mx-2' /> More
          </Button>
        ) : (
          <Button
            variant={'destructive'}
            onClick={() => setMore(!more)}
            size={'lg'}
            className='flex mx-auto my-10 tracking-widest sm:text-3xl p-6 w-full'
          >
            <ArrowUpFromLine size={35} className='mx-2' />
            Less...
          </Button>
        )}
      </div>
    </div>
  )
}
export default TitlesGrid
