import { PokeCard } from "../PokeCard/PokeCard"
import "./pokeContainer.css"

export function PokeContainer({lista}){

    return(
        <section className="PokeContainer">
            {lista.map((elem, index)=>{
                return <PokeCard key={index} pokemon={elem} />
            })}
        </section>
    )
}