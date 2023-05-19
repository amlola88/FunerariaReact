import { useEffect,useState } from "react"
import Header from "../header/Header"

const Personas = () => {
    const [personas,setPersonas]=useState([])
    const mostrarPersonas=async()=>{
        await fetch("src/json/personas.json")
        .then((res)=>res.json())
        .then((data)=>setPersonas(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(personas)
    }
    useEffect(()=>{mostrarPersonas()},[])

  return (
    <div>
        <section className="navegador">
        <Header/>
        </section>
        <section className="Cards">
        {personas.map((personas)=>(        
                <section key={personas.id} className="Card">
                    <h1>{personas.nombre}</h1>
                    <p>{personas.descripcion}</p>
                    <p>{personas.precio}</p>
                    <p>{personas.tiempo}</p>
                    <p>{personas.ubicacion}</p>
                    <img className="imggeneral" src={personas.img}/>
                </section>              
        ))}
         </section> 
               
    </div>
  )
}

export default Personas