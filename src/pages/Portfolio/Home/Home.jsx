import { useEffect, useState } from 'react'
import './home.css'
import { RedesSociales } from '../../../components/Portfolio/RedesSociales/RedesSociales'
import { Presentacion } from '../../../components/Portfolio/Presentacion/Presentacion'
import { BotonSeccion } from '../../../components/Portfolio/BotonSeccion/BotonSeccion'
import { Estudios } from '../Estudios/Estudios'
import { Proyectos } from '../Proyectos/Proyectos'
import { Tecnologias } from '../Tecnologias/Tecnologias'
import { SobreMi } from '../SobreMi/SobreMi'
import { PortfolioFooter } from '../../../components/Portfolio/Footer/Footer'
import { motion } from "framer-motion"

export const Home = () => {

	const [verFormacion, setVerFormacion] = useState(false)
	const [verProyectos, setVerProyectos] = useState(false)
	const [verTech, setVerTech] = useState(false)
	const [verSobreMi, setVerSobreMi] = useState(false)

	const [movil, setMovil] = useState(false);
	const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth)

	useEffect(()=>{
		const manejarResize =()=>{
			setAnchoPantalla(window.innerWidth)
		}
		window.addEventListener('resize', manejarResize)

		anchoPantalla < 800 ? setMovil(true) : setMovil(false)

	},[anchoPantalla])

	function handleClick(info) {
		if(info === "Formación"){
			setVerFormacion(!verFormacion)
			setVerProyectos(false)
			setVerTech(false)
			setVerSobreMi(false)
		}
		else if(info === "Proyectos"){
			setVerFormacion(false)
			setVerProyectos(!verProyectos)
			setVerTech(false)
			setVerSobreMi(false)
		}
		else if(info === "Tecnologías"){
			setVerFormacion(false)
			setVerProyectos(false)
			setVerTech(!verTech)
			setVerSobreMi(false)
		}
		else if(info === "Sobre mí"){
			setVerFormacion(false)
			setVerProyectos(false)
			setVerTech(false)
			setVerSobreMi(!verSobreMi)
		}	
	}	

  return (
    <>
		<main className='portfolioMain'>
			<RedesSociales />

			<Presentacion />

			<motion.div
				initial={{ opacity: 0, y: 15, scale: 0.9 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.9, ease: "easeOut", delay: 1.1 }}
				className="card"
        	>
				<section className="botonesSection">
					<BotonSeccion handleClick={handleClick} seccion="Formación" variable={verFormacion} />
						{movil & verFormacion ? <Estudios /> : null }
					<BotonSeccion handleClick={handleClick} seccion="Proyectos" variable={verProyectos} />
						{movil & verProyectos ? <Proyectos /> : null }
					<BotonSeccion handleClick={handleClick} seccion="Tecnologías" variable={verTech} />
						{movil & verTech ? <Tecnologias /> : null }
					<BotonSeccion handleClick={handleClick} seccion="Sobre mí" variable={verSobreMi} />
						{movil & verSobreMi ? <SobreMi /> : null }
				</section>
			</motion.div>

			{!movil && <section className="ver-seleccion">
				{!movil & verFormacion ? <Estudios /> : null }
				{(!movil & verProyectos) ? <Proyectos /> : null }
				{!movil & verTech ? <Tecnologias /> : null }
				{!movil &verSobreMi ? <SobreMi /> : null }
			</section>}

			<br /><br /><br /><br /><br /><br />
		</main>

		<PortfolioFooter />
    </>
  )
}
