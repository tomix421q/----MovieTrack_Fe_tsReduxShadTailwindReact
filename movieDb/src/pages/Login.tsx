import { ActionFunction, Form, Link, redirect, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { FormInput } from '../components'
import SubmitBtn from '../components/formComponents/SubmitBtn'
import { Button } from '../components/ui/button'
import { useAppDispatch } from '../hooks'
import { customFetchUser } from '../utils'
import { loginUser } from '../features/users/userSlice'
import { toast } from '../components/ui/use-toast'
import { ReduxStore } from '../store'
import { AxiosResponse } from 'axios'

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
      const response: AxiosResponse = await customFetchUser.post('/auth/local', data)
      const username = response.data.user.username
      const jwt = response.data.jwt
      store.dispatch(loginUser({ username, jwt }))
      return redirect('/')
    } catch (error) {
      toast({ description: 'Login Failed' })
    }
    return null
  }

function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const loginAsQuestUser = async (): Promise<void> => {
    try {
      const response = await customFetchUser.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      })
      const username = response.data.user.username
      const jwt = response.data.jwt
      dispatch(loginUser({ username, jwt }))
      navigate('/')
    } catch (error) {
      console.log(error)
      toast({ description: 'Login Failed' })
    }
  }

  return (
    <section className='h-screen grid place-items-center'>
      <Card className='w-96'>
        <CardHeader>
          <CardTitle className='text-center'>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='post'>
            <FormInput name={'identifier'} type={'email'} label='email' />
            <FormInput name={'password'} type={'password'} />

            <SubmitBtn text={'Login'} className='w-full mt-4' />

            <Button type='button' variant={'outline'} onClick={loginAsQuestUser} className='w-full mt-4'>
              Quest User
            </Button>
            <p className='text-center mt-4 flex justify-between'>
              <span>Not a member yet ?</span>
              <Button type='button' asChild variant={'secondary'}>
                <Link to={'/register'}>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}
export default Login
