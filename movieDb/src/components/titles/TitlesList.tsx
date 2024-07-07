import { Link, useLoaderData } from 'react-router-dom'
import { TitlesResponse } from '../../utils/type'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'
import { truncateText } from '../../utils/truncateText'

function TitlesList() {
  const { results: titles } = useLoaderData() as TitlesResponse

  return (
    <div>
      <div className='pt-12 grid md:grid-cols-2  gap-10 max-w-6xl  mx-auto '>
        {titles.map((title) => {
          const { id, titleText, primaryImage, releaseDate, ratingsSummary, titleType } = title

          return (
            <Link to={`/titles/${title.id}`} key={id} className='relative'>
              <Card className='bg-primary-foreground rounded-md mx-4 overflow-hidden'>
                <CardContent className='p-4 hover:ring-2 ease-in duration-100 flex gap-x-4 justify-between '>
                  <div className='w-[50%]'>
                    {primaryImage && primaryImage.url ? (
                      <img
                        src={primaryImage.url}
                        alt={titleText.text}
                        width={100}
                        loading='lazy'
                        className='rounded-md w-full h-[15.625rem] object-contain'
                      />
                    ) : (
                      <img
                        src='/noImage.jpg'
                        alt='no image'
                        width={100}
                        className='rounded-md w-full h-[15.625rem] object-contain'
                      />
                    )}
                  </div>

                  <div className='min-h-full space-y-4 flex justify-start flex-col w-[50%]'>
                    {/* RATINGS */}
                    <div className='w-full my-2'>
                      <p className='font-thin tracking-wide'>
                        Rating: <span className='text-amber-400 font-bold'>{ratingsSummary.aggregateRating || '-'} </span> / 10
                      </p>
                      <p className='font-thin tracking-wide text-sm'>
                        Votes: <span className='text-emerald-300 font-normal'>{ratingsSummary.voteCount} </span>
                      </p>
                    </div>
                    <div className='flex-grow-0 mt-4 space-y-4 flex justify-end flex-col'>
                      <h1 className='text-xl font-bold tracking-wider uppercase '>
                        {' '}
                        <abbr className='no-underline' title={titleText.text}>
                          {truncateText(titleText.text, 29)}
                        </abbr>
                      </h1>
                      <p className='px-2 rounded-lg font-light text-sm bg-violet-400 w-fit'>{titleType.text}</p>
                    </div>

                    <div className='flex-grow' />
                    <Separator />
                    {releaseDate === null ? (
                      <p>No Release date</p>
                    ) : (
                      <p>
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
export default TitlesList
