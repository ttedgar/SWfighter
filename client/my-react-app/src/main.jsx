import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./index.css"
import Starmap from './page/Starmap.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Starmap/>
    </>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
