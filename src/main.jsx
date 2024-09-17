import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import RootLayout from './Page/Rootlayout.jsx'

const router = createBrowserRouter([
  { path: "/",
    element: <RootLayout/>,
    children:[
      {
        path: "/",
        element: <App />,
      }
    ]

  },
  {
    path: "/",
    element: <h1>About Page</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
