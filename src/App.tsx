import { FC } from 'react'
import Layout from './layout'
import Booking from './pages/Booking'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailItemPage from './pages/DetailItem'

const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: 'booking',
            element: <Booking />,
         },
         {
            path: 'menu',
            element: <MenuPage />,
         },
         {
            path: 'menu/:id',
            element: <DetailItemPage />,
         },
      ],
   },
])

const App: FC = () => <RouterProvider router={router} />
export default App
