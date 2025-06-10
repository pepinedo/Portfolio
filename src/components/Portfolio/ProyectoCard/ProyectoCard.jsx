import "./proyectoCard.css"
import { motion } from "framer-motion"

export const ProyectoCard = ({elem}) => {


  return (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="card"
    >
    <article  className="proyectoCard" onClick={()=>window.open(elem.url)} key={elem.titulo}>
        <img className="proyectoCard__foto" src={elem.foto} alt={elem.titulo} />
        <div className="proyectoCard__texto">
            <div></div>
            <div>
                <h1>{elem.titulo}</h1>
                {elem.descripcion.map((p)=>{
                    return(
                            <p key={p}>{p}</p>
                    )
                })}
            </div>
        </div>
        <div className="proyectoCard__seccionNegra">
            <div></div>
            <div>
                <h2>Principales tecnologías utilizadas:</h2>
                <div className="proyectoCard__tecnologias">
                    {elem.tecnologias.map((elem)=>{
                        return(
                            <img src={elem.imagen} alt={elem.nombre} key={elem.nombre}/>
                        )
                    })}
                </div>
            </div>
        </div>
    </article>
    </motion.div>
  )
}
