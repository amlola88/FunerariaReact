import { Link } from "react-router-dom"


const Menu = () => {
    
    return (
        <section className="menu"> 
          
                <Link to={"/"}>Inicio</Link> 
                <Link to={"/Personas"}>Personas</Link> 
                <Link to={"/Mascotas"}>Mascotas</Link> 
                <Link to={"/Productos"}>Productos</Link>
                <Link to={"/BosqueCenizario"}>Bosque Cenizario</Link>
                <Link to={"/CenizasMar"}>Depositar cenizas en el mar</Link>
        </section>
            
    
  )
}

export default Menu