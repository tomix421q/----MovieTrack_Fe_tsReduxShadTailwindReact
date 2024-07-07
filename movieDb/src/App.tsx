import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, ErrorPage, HomeLayout, Landing, Login, Profile, Register, Titles } from './pages'
import { ErrorElement } from './components'

// LOADERS
import { loader as landingLoader } from './pages/Landing'
import { loader as titlesListLoader } from './pages/Titles'
import { loader as singleTitleLoader } from './pages/SingleTitle'

//ACTIONS
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'

import SingleTitle from './pages/SingleTitle'
import { store } from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      { path: '/about', element: <About />, errorElement: <ErrorElement /> },
      { path: '/titles', element: <Titles />, errorElement: <ErrorElement />, loader: titlesListLoader },
      { path: '/profile', element: <Profile />, errorElement: <ErrorElement /> },
      { path: '/titles/:id', element: <SingleTitle />, errorElement: <ErrorElement />, loader: singleTitleLoader },
    ],
  },
  { path: '/login', element: <Login />, errorElement: <ErrorElement />, action: loginAction(store) },
  { path: '/register', element: <Register />, action: registerAction },
])

function App() {
  return <RouterProvider router={router} />
}
export default App
