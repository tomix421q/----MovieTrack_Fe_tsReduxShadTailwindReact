import { ActionFunction, Form, Link, redirect } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { FormInput } from '../components'
import { Button } from '../components/ui/button'
import { customFetchUser } from '../utils'
import { toast } from '../components/ui/use-toast'
import { AxiosError } from 'axios'
import SubmitBtn from '../components/formComponents/SubmitBtn'

export const action: ActionFunction = async ({ request }): Promise<Response | null> => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetchUser.post('/auth/local/register', data)
    toast({ description: 'Registered' })
    return redirect('/login')
  } catch (error) {
    console.log(error)
    const errorMsg = error instanceof AxiosError ? error.response?.data.error.message : 'Registration Failed'
    // console.log(errorMsg)
    toast({ description:  errorMsg })
    return null
  }
}

function Register() {
  return (
    <section className='h-screen grid place-items-center'>
      <Card className=' w-80'>
        <CardHeader>
          <CardTitle className='text-center'>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='post'>
            <FormInput name={'username'} type={'text'} defaultValue='test' />
            <FormInput name={'email'} type={'text'} defaultValue='text@gmail.com' />
            <FormInput name={'password'} type={'text'} defaultValue='secret' />

            <SubmitBtn text={'Register'} className='w-full mt-4' />

            <p className='text-center mt-10 flex justify-between items-center'>
              <span>Already a member?</span>
              <Button type='button' asChild variant={'secondary'}>
                <Link to={'/login'}>Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}
export default Register
