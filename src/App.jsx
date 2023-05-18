import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Menu from "./components/header/Menu"
import Personas from "./components/servicios/Personas"
import Mascotas from "./components/servicios/Mascotas"
import Productos from "./components/servicios/Productos"

const router=createBrowserRouter([
  {
    path:"/Menu",
    element:<Menu/>
  },
  {
    path:"/Personas",
    element:<Personas/>  
  },
  {
    path:"/Macostas",
    element:<Mascotas/>
  },
  {
    path:"/Productos",
    element:<Productos/>
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
