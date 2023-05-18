import { useEffect,useState } from "react"

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
    <div className="mascotas">
        {mascotas.map((mascotas)=>(
            <section key={mascotas.id} className="CardMascotas">
                <h1>{mascotas.nombre}</h1>
                <p>{mascotas.descripcion}</p>
                <p>{mascotas.precio}</p>
                <p>{mascotas.duracion}</p>
                <p>{mascotas.incluye}</p>
                <p>{mascotas.condiciones}</p>
            </section> 

        ))}
    </div>      
    
  )
}

export default Mascotas