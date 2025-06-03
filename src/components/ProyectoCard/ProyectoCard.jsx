import "./proyectoCard.css"

export const ProyectoCard = ({elem}) => {
  return (
    <article  className="proyectoCard" onClick={()=>window.open(elem.url)} key={elem.titulo}>
        <img className="proyectoCard__foto" src={elem.foto} alt={elem.titulo} />
        <div className="proyectoCard__texto">
            <h1>{elem.titulo}</h1>
            {elem.descripcion.map((p)=>{
                return(
                    <>
                        <br />
                        <p>{p}</p>
                    </>
                )
            })}
        <div className="proyectoCard__seccionNegra">
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
  )
}
