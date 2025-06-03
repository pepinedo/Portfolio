import "./presentacion.css"

export function Presentacion(){
    return(
        <section className='presentacion'>
            <img src="images/avatar.png" alt="Pedro Pinedo Cobo sonriendo, con traje de chaqueta y los brazos cruzados" />
            <h1>Pedro Pinedo Cobo</h1>
            <p>Fullstack Developer</p>
            <div className="presentacion__lineaDivisoria"></div>
            <p>React | NodeJS | SpringBoot | SQL</p>
            <a className="presentacion__linkCV" href='files/CV_Pedro_Pinedo_Cobo.pdf' target='_blank'>Ver CV</a>
		</section>
    )
}