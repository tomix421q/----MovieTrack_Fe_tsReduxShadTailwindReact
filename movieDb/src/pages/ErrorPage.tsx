import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Button } from '../components/ui/button'

function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className='grid min-h-[100vh] place-items-center px-8 bg-primary/80'>
        <div className='text-center'>
          <img src='/404.png' className='size-[31.25rem]'></img>

          <div className='mt-10'>
            <p className=' text-lg leading-7 mb-4 text-black font-extrabold'>Sorry,we couldn't find the page you are looking for.</p>
            <Button asChild size={'lg'} variant={'secondary'}>
              <Link to={'/'}>Back to home</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='grid min-h-[100vh] place-items-center px-8'>
      <h4 className='text-center font-bold text-4xl'>There was an error...</h4>
    </main>
  )
}
export default ErrorPage
