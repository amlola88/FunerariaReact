import { useEffect,useState } from "react"
import Header from "../header/Header"

const Mascotas = () => {
    const [mascotas,setMascotas]=useState([])
    const mostrarMascotas=async()=>{
        await fetch("src/json/mascotas.json")
        .then((res)=>res.json())
        .then((data)=>setMascotas(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(mascotas)
    }
    useEffect(()=>{mostrarMascotas()},[])
  return (
    <div>
        <section className="navegador">
            <Header/>
        </section>
        <section className="Cards">  
        {mascotas.map((mascotas)=>(
                <section key={mascotas.id} className="Card">
                    <h1>{mascotas.nombre}</h1>
                    <p>{mascotas.descripcion}</p>
                    <p>{mascotas.precio}</p>
                    <p>{mascotas.duracion}</p>
                    <p>{mascotas.incluye}</p>
                    <p>{mascotas.condiciones}</p>
                    <img className="imggeneral" src={mascotas.img}/>
                </section>           
        ))}
          </section>
    </div>      
    
  )
}

export default Mascotas