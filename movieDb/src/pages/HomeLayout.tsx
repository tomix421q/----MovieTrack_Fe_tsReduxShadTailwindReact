import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Loading, Navbar } from '../components'

function HomeLayout() {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <div className=''>
      <Header />
      <Navbar />
      <div>{isPageLoading ? <Loading /> : <Outlet />}</div>
    </div>
  )
}
export default HomeLayout
