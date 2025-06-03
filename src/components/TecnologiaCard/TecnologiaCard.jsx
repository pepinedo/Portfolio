import "./tecnologiaCard.css"

export const TecnologiaCard = ({tecnologia}) => {
  return (
        <div className="div-tech-cartas">
            <div key={tecnologia.nombre} className="carta">
                <img src={tecnologia.imagen} alt={tecnologia.nombre} />
                <p>{tecnologia.nombre}</p>
                <div className="cartaLineaAbajo"></div>
            </div>
        </div>
  )
}
