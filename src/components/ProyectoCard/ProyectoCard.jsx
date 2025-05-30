import "./proyectoCard.css"

export const ProyectoCard = ({elem}) => {
  return (
    <article  className="proyecto-card" onClick={()=>window.open(elem.url)} key={elem.titulo}>
        <img className="foto" src={elem.foto} alt={elem.titulo} />
        <div>
            <h1>{elem.titulo}</h1>
            {elem.descripcion.map((p)=>{
                return(
                    <>
                        <br />
                        <p>{p}</p>
                    </>
                )
            })}
            <h2>Principales tecnologías utilizadas:</h2>
            <div className="proyecto-card__tecnologias">
                {elem.tecnologias.map((elem)=>{
                    return(
                        <img className="tecnologia" src={elem.imagen} alt={elem.nombre} key={elem.nombre}/>
                    )
                })}
            </div>
        </div>
    </article>
  )
}
