import "./sobreMiCard.css"

export const SobreMiCard = ({elem}) => {
  return (
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
  )
}
