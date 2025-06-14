import { TecnologiaCard } from "../../../components/Portfolio/TecnologiaCard/TecnologiaCard"
import { tecnologias } from "../../../data/tecnologias"
import "./tecnologias.css"

export const Tecnologias = () => {
  return (
    <section className='tecnologias-section'>
        {tecnologias?.map((group)=>{
            return(
                <article key={group.grupo} className="grupo-tech">
                    <h1>{group.grupo}</h1>
                    <div className="div-tech-cartas">
                        {group.tecnologias.map((elem)=>{
                            return(
                                <TecnologiaCard key={elem.nombre} tecnologia={elem} />
                            )
                        })}
                    </div>
                    <br />
                </article>
            )
        })}
    </section>
  )
}
