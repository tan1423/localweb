import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Github from './components/GitHub/Github.jsx'
import User from './components/User/User.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/github',
        element: <Github/>
      },
      {
        path: '/user/:userid',
        element: <User/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
