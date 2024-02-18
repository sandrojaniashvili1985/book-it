import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from '../router.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import './styles/index.css'

const queryClient = new QueryClient()

const routers = createBrowserRouter(router)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} />
    </QueryClientProvider>
  </React.StrictMode>
)

