import { motion } from "framer-motion"
import "./botonSeccion.css"

export function BotonSeccion({handleClick, seccion}){
    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 0px 0px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="card"
        >
            <button 
                onClick={()=>handleClick(seccion)}
                className={`botonesSection__boton`}
            >
                {seccion}
                <div className="botonesSection__boton__subrallado"></div>
            </button>
        </motion.div>
    )
}