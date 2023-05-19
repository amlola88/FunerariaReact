import { useEffect,useState } from "react"

const BosqueCenizario = () => {
    const [bosqueCenizario,setBosqueCenizario]=useState([])
    const mostrarBosqueCenizario=async()=>{
        await fetch("src/json/bosque.json")
        .then((res)=>res.json())
        .then((data)=>setBosqueCenizario(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(bosqueCenizario)
    }
    useEffect(()=>{mostrarBosqueCenizario()},[])
  return (
    <div className="bosqueCenizario">
    {bosqueCenizario.map((bosqueCenizario)=>(
        <section key={bosqueCenizario.id} className="CardbosqueCenizario">
            <h1>{bosqueCenizario.nombre}</h1>
            <p>{bosqueCenizario.ubicacion}</p>
            <p>{bosqueCenizario.precio}</p>
            <p>{bosqueCenizario.descripcion}</p>
            <p>{bosqueCenizario.incluye}</p>           
       </section> 

    ))}
           
</div>
    
  )
}

export default BosqueCenizario