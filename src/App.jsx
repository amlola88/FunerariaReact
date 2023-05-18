import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Menu from "./components/header/Menu"

import Personas from "./components/servicios/Personas"

const router=createBrowserRouter([
  {
    path:"/Menu",
    element:<Menu/>
  },
  {
    path:"/Personas",
    element:<Personas/>  
  }

])


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
