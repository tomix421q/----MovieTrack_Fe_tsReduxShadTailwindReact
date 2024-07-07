import { Link, useLoaderData } from 'react-router-dom'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'
import { TitlesResponse } from '../../utils/type'
import { truncateText } from '../../utils/truncateText'

function TitlesGridList() {
  const { results: titles } = useLoaderData() as TitlesResponse
  return (
    <div>
      <div className='pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
        {titles.map((title) => {
          const { id, titleText, primaryImage, releaseDate, ratingsSummary, titleType } = title

          return (
            <Link to={`/titles/${title.id}`} key={id} className={`relative px-4`}>
              <Card className='bg-primary-foreground rounded-md hover:ring-2 ease-in duration-100 overflow-hidden'>
                <CardContent className={`p-4`}>
                  {primaryImage && primaryImage.url ? (
                    <img
                      src={primaryImage.url}
                      alt={titleText.text}
                      width={300}
                      loading='lazy'
                      className='rounded-md h-[15.625rem]  w-full object-contain'
                    />
                  ) : (
                    <img
                      src='/noImage.jpg'
                      alt='no image'
                      width={300}
                      className='rounded-md h-[15.625rem] w-full object-contain'
                    />
                  )}
                  {/* RATING */}
                  <div className='w-full my-4'>
                    <p className=' font-thin tracking-wide text-center'>
                      Rating: <span className='text-amber-400 font-bold'>{ratingsSummary.aggregateRating || '-'} </span> / 10
                    </p>
                    <p className='font-thin tracking-wide text-center text-sm'>
                      Total votes: <span className='text-emerald-300 font-normal'>{ratingsSummary.voteCount} </span>
                    </p>
                  </div>

                  <div className='mt-4 text-center  space-y-4 flex justify-end flex-col'>
                    <div>
                      <h1 className='uppercase text-xl font-bold tracking-wider flex justify-center items-center '>
                        <abbr className='no-underline' title={titleText.text}>
                          {truncateText(titleText.text, 20)}
                        </abbr>
                      </h1>
                      <p className='px-2 rounded-lg font-light text-sm bg-violet-400 w-fit mx-auto'>{titleType.text}</p>
                    </div>

                    <div className='flex-grow' />
                    <Separator />

                    {releaseDate == null ? (
                      'No Release date'
                    ) : (
                      <p className='mt-auto'>
                        Release date: {releaseDate.day && releaseDate ? releaseDate.day : 'X'}.
                        {releaseDate.month && releaseDate ? releaseDate.month : 'X'}.
                        {releaseDate.year && releaseDate ? releaseDate.year : 'xxxx'}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default TitlesGridList
