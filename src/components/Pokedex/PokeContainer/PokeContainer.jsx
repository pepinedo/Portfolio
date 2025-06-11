import "./pokeContainer.css"
import { PokeCard } from "../PokeCard/PokeCard"

export function PokeContainer({lista}){

    return(
        <section className="PokeContainer">
            {lista.map((elem, index)=>{
                return <PokeCard key={index} pokemon={elem} />
            })}
        </section>
    )
}