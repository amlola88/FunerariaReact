import { useEffect,useState } from "react"


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
    <div className="personas">
        {personas.map((personas)=>(
            <section key={personas.id} className="CardPersonas">
                <h1>{personas.nombre}</h1>
            </section> 

        ))}
               
    </div>
  )
}

export default Personas