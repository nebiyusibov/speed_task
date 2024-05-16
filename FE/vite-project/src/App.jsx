import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './ROUTERS/router'

function App() {

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
