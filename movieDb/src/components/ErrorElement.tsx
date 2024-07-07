import { Link, useRouteError } from 'react-router-dom'
import { Button } from './ui/button'

function ErrorElement() {
  const error = useRouteError()
  console.log(error)

  return (
    <>
      <div className='h-screen flex flex-col size-[100px] sm:size-[600px]  items-center w-full mx-auto mt-20'>
        <img src='/codeError.jpeg' alt='' />
        <h4 className='font-bold text-4xl mb-10'>CODE ERROR...</h4>
        <Button asChild variant={'secondary'} size={'lg'}>
          <Link to={'/'}>Home</Link>
        </Button>
      </div>
    </>
  )
}
export default ErrorElement
