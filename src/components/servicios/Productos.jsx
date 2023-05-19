import { useEffect,useState } from "react"
import Header from "../header/Header"

const Productos = () => {
    const [productos,setProductos]=useState([])
    const mostrarProductos=async()=>{
        await fetch("src/json/productos.json")
        .then((res)=>res.json())
        .then((data)=>setProductos(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(productos)
    }
    useEffect(()=>{mostrarProductos()},[])
  return (
    <div>
      <Header/>
    {productos.map((productos)=>(
        <section key={productos.id} className="CardProductos">
            <h1>{productos.nombre}</h1>
            <p>{productos.descripcion}</p>
            <p>{productos.precio}</p>
            <p>{productos.tipo}</p>
            <p>{productos.dimensiones}</p>
            <p>{productos.material}</p>
            <p>{productos.color}</p>
            <img className="imggeneral" src={productos.img}/>

       </section> 

    ))}
           
</div>
  )
}

export default Productos