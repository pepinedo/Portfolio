import "./sobreMiCard.css"

export const SobreMiCard = ({elem}) => {
  return (
        <article className="sobreMi-card" key={elem.index}>
            <img className="foto" src={elem.foto} alt="" />
            <div>
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
        </article>
  )
}
