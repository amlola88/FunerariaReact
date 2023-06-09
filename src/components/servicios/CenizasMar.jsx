import { useEffect,useState } from "react"
import Header from "../header/Header";

const CenizasMar = () => {
    const [cenizasMar,setCenizasMar]=useState([])
    const mostrarCenizasMar=async()=>{
        await fetch("src/json/mar.json")
        .then((res)=>res.json())
        .then((data)=>setCenizasMar(data))
        .catch((err)=>{
            console.log(err)
        });
        console.log(cenizasMar)
    }
    useEffect(()=>{mostrarCenizasMar()},[])
  return (
    <div>
      <section className="navegador">
        <Header/>
      </section>
      <section className="Cards">
    {cenizasMar.map((cenizasMar)=>(
             
        <section key={cenizasMar.id} className="Card">
            <h1>{cenizasMar.nombre}</h1>
            <p>{cenizasMar.ubicacion}</p>
            <p>{cenizasMar.precio}</p>
            <p>{cenizasMar.descripcion}</p>
            <p>{cenizasMar.incluye}</p>
            <img className="imggeneral" src={cenizasMar.img}/>                    
       </section> 
    ))}
     </section>
           
</div>
  )
}

export default CenizasMar