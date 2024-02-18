import Home from './src/components/Home'
import About from './src/components/About'
import UsersPage from './src/components/Users'
import Layout from './src/layout/Layout'

const router = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      }
    ]
  }
]

export default router