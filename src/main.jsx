import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './components/Routes/Routes'
import AuthProvider from './components/context/AuthContext'
import NewsProvider from './components/context/NewsContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <NewsProvider>
    <RouterProvider router={routes}/>
    </NewsProvider>
    </AuthProvider>
  </StrictMode>,
)
