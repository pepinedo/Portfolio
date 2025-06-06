import "./tecnologiaCard.css"
import { motion } from "framer-motion"

export const TecnologiaCard = ({tecnologia}) => {
  return (
        <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        className="card"
    >
        <div className="div-tech-cartas">
            <div key={tecnologia.nombre} className="carta">
                <img src={tecnologia.imagen} alt={tecnologia.nombre} />
                <p>{tecnologia.nombre}</p>
                <div className="cartaLineaAbajo"></div>
            </div>
        </div>
        </motion.div>
  )
}
