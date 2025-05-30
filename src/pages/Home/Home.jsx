import { useState } from 'react'
import './home.css'
import { Estudios } from '../../pages/Estudios/Estudios'
import { Tecnologias } from '../../pages/Tecnologias/Tecnologias'
import { Proyectos } from '../../pages/Proyectos/Proyectos'
import { SobreMi } from '../../pages/SobreMi/SobreMi'

export const Home = () => {

	const [verEstudios, setVerEstudios] = useState(false)
	const [verProyectos, setVerProyectos] = useState(false)
	const [verTech, setVerTech] = useState(false)
	const [verSobreMi, setVerSobreMi] = useState(false)

	function handleClick(info) {
		if(info === "estudios"){
			setVerEstudios(!verEstudios)
			setVerProyectos(false)
			setVerTech(false)
			setVerSobreMi(false)
		}
		else if(info === "proyectos"){
			setVerEstudios(false)
			setVerProyectos(!verProyectos)
			setVerTech(false)
			setVerSobreMi(false)
		}
		else if(info === "tech"){
			setVerEstudios(false)
			setVerProyectos(false)
			setVerTech(!verTech)
			setVerSobreMi(false)
		}
		else if(info === "sobreMi"){
			setVerEstudios(false)
			setVerProyectos(false)
			setVerTech(false)
			setVerSobreMi(!verSobreMi)
		}	
	}	

  return (
    <>
		<section className='redes-sociales'>
			<a href="https://github.com/pepinedo" target='_blank' rel="noopener noreferrer">
				<img src="images/icons/github.png" alt="Icono de Github" />
			</a>
			<a href="https://www.linkedin.com/in/pedro-pinedo-cobo/" target='_blank' rel="noopener noreferrer">
				<img src="images/icons/linkedin.png" alt="Icono de Linkedin" />
			</a>
		</section>

		<section className='home-header'>
			<div className='present'>
				<img src="images/avatar.png" alt="Pedro Pinedo Cobo con traje de chaqueta, con los brazos cruzados, sonriendo" />
				<h1>Pedro Pinedo Cobo</h1>
				<p><strong>Fullstack Developer</strong></p> 
				<p>React | NodeJS | SpringBoot | SQL</p>
			</div>
			<div className="links-cv">
				<a href='files/CV_Pedro_Pinedo_Cobo.pdf' target='_blank'>Ver CV</a>
				<a href='files/CV_Pedro_Pinedo_Cobo.pdf' download={"files/CV_Pedro_Pinedo_Cobo.pdf"}>Descargar CV</a>
			</div>
		</section>

		<section className="botones-section">
			<button onClick={()=>handleClick("estudios")} className={verEstudios ? "active" : ""}>Estudios</button>
			<button onClick={()=>handleClick("proyectos")} className={verProyectos ? "active" : ""}>Proyectos</button>
			<button onClick={()=>handleClick("tech")} className={verTech ? "active" : ""}>Tecnologías</button>
			<button onClick={()=>handleClick("sobreMi")} className={verSobreMi ? "active" : ""}>Sobre mí</button>
		</section>

		<section className="ver-seleccion">
			{verEstudios && <Estudios /> }
			{verProyectos && <Proyectos /> }
			{verTech && <Tecnologias /> }
			{verSobreMi && <SobreMi /> }
		</section>

		<br />
		<br />
    </>
  )
}
