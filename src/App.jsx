import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Header from "./components/header/Header"
import Personas from "./components/servicios/Personas"
import Mascotas from "./components/servicios/Mascotas"
import Productos from "./components/servicios/Productos"
import BosqueCenizario from "./components/servicios/BosqueCenizario"
import CenizasMar from "./components/servicios/CenizasMar"

const router=createBrowserRouter([
  {
    path:"/",
    element:<Header/>
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
    <section>
      <RouterProvider router={router}/>
    </section>
         
  )
}

export default App
