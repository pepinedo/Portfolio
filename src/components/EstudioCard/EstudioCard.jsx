import "./estudioCard.css"
import { motion } from "framer-motion"

export const EstudioCard = ({elem}) => {

  return (
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="card"
            >
            <article className="estudioCard" key={elem.titulo}>
                <div className="estudioCard__topCard">
                    <h1>{elem.titulo}</h1>
                    <h2>{elem.empresa}</h2>
                    <div className="estudioCard__topCard__barraDivisoria"></div>
                    <p>{elem.fecha}</p>
                </div>
                <div className="estudioCard__bottonCard">
                    {elem.detalles.map((detalle)=>{
                    return(
                        <p>{detalle}</p>
                    )
                    })}
                </div>
            </article>
        </motion.div>
  )
}
