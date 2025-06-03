import { useState } from 'react'
import './home.css'
import { Estudios } from '../../pages/Estudios/Estudios'
import { Tecnologias } from '../../pages/Tecnologias/Tecnologias'
import { Proyectos } from '../../pages/Proyectos/Proyectos'
import { SobreMi } from '../../pages/SobreMi/SobreMi'
import { RedesSociales } from '../../components/RedesSociales/RedesSociales'
import { Presentacion } from '../../components/Presentacion/Presentacion'
import { BotonSeccion } from '../../components/BotonSeccion/BotonSeccion'

export const Home = () => {

	const [verFormacion, setVerFormacion] = useState(false)
	const [verProyectos, setVerProyectos] = useState(false)
	const [verTech, setVerTech] = useState(false)
	const [verSobreMi, setVerSobreMi] = useState(false)

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
		<RedesSociales />

		<Presentacion />

		<section className="botonesSection">
			<BotonSeccion handleClick={handleClick} seccion="Formación" variable={verFormacion} />
			<BotonSeccion handleClick={handleClick} seccion="Proyectos" variable={verProyectos} />
			<BotonSeccion handleClick={handleClick} seccion="Tecnologías" variable={verTech} />
			<BotonSeccion handleClick={handleClick} seccion="Sobre mí" variable={verSobreMi} />
		</section>

		<section className="ver-seleccion">
			{verFormacion && <Estudios /> }
			{verProyectos && <Proyectos /> }
			{verTech && <Tecnologias /> }
			{verSobreMi && <SobreMi /> }
		</section>

		<br />
		<br />
    </>
  )
}
