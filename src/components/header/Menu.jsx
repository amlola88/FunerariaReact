import { Link } from "react-router-dom"


const Menu = () => {
    
    return (
        <section className="menu"> 
          
                <Link to={"/"}>Inicio</Link> 
                <Link to={"/Usuario"}>Usuario</Link> 
                <Link to={"/Libros"}>Libros</Link> 
                <Link to={"/Editoriales"}>Editoriales</Link>
         
        </section>
            
    
  )
}

export default Menu