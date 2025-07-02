import { motion } from "framer-motion"
import "./presentacion.css"

export function Presentacion(){
    return(
            <section className='presentacion'>
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="card"
                >
                        <img src="Portfolio/images/perfil.jpeg" alt="Pedro Pinedo Cobo sonriendo, con una camiseta negra y con un fondo de color negro y verde" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut",  delay: 0.2 }}
                    className="card"
                >
                <h1>Pedro Pinedo Cobo</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut",  delay: 0.6 }}
                    className="card"
                >
                    <p className="presentacion__fullstack">Fullstack Developer</p>
                    <div className="presentacion__lineaDivisoria"></div>
                    <p>React | NodeJS | SpringBoot | SQL</p>
                    <br /><br />
                    <a className="presentacion__linkCV" href='Portfolio/files/CV_Pedro_Pinedo_Cobo.pdf' target='_blank'>Ver CV</a>
                    <br /><br />
                </motion.div>
            </section>
    )
}