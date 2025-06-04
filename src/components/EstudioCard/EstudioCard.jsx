import "./estudioCard.css"
import { useEffect, useState } from "react"

export const EstudioCard = ({elem}) => {

  return (
        <article className="estudio-card" key={elem.titulo}>
            <div className="top-card">
                <h1>{elem.titulo}</h1>
                <div>
                <h2>{elem.empresa}</h2>
                <p>{elem.fecha}</p>
                </div>
            </div>
            <hr />
            <div className="bottom-card">
                {elem.detalles.map((detalle)=>{
                return(
                    <p>{detalle}</p>
                )
                })}
            </div>
        </article>
  )
}
