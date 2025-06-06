import "./sobreMiCard.css"
import { motion } from "framer-motion"

export const SobreMiCard = ({elem}) => {
  return (
        <motion.div
            initial={{ opacity: 0, scale: 0.90 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="card"
        >
            <article className="sobreMiCard" key={elem.index}>
                <img className="sobreMiCard__foto" src={elem.foto} alt="" />
                <div className="sobreMiCard__texto">
                    <h1>{elem.titulo} </h1>
                    {elem.descripcion.map((p)=>{
                        return(
                            <>
                                <br />
                                <p>{p}</p>
                            </>
                        )
                    })}
                </div>
                <div className="sobreMiCard__LineaAbajo"></div>
            </article>
        </motion.div>
  )
}
