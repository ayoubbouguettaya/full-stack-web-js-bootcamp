import { StrictMode } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListProduct from './components/list-products.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/all',
      element: <ListProduct />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>   </RouterProvider>
  </StrictMode>,
)
