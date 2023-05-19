import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Menu from "./components/header/Menu"
import Personas from "./components/servicios/Personas"
import Mascotas from "./components/servicios/Mascotas"
import Productos from "./components/servicios/Productos"
import BosqueCenizario from "./components/servicios/BosqueCenizario"
import CenizasMar from "./components/servicios/CenizasMar"

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
    path:"/Mascotas",
    element:<Mascotas/>
  },
  {
    path:"/Productos",
    element:<Productos/>
  },
  {
    path:"/BosqueCenizario",
    element:<BosqueCenizario/>
  },
  {
    path:"/CenizasMar",
    element:<CenizasMar/>
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
