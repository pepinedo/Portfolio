import { ProyectoCard } from "../../../components/Portfolio/ProyectoCard/ProyectoCard"
import { proyectos } from "../../../data/proyectos"
import "./proyectos.css"

export const Proyectos = () => {
  return (
    <section className='proyectos-section'>
        {proyectos?.map((elem)=>{
            return(
                <ProyectoCard key={elem.titulo} elem={elem} />
            )
        })}
        <p className="y-muchos-mas">Y muchos más en proceso...</p>
    </section>
  )
}
