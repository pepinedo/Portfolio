import { useEffect, useState } from "react"
import "./pokeCard.css"
import { useNavigate } from "react-router-dom"
import { getPokemonDataCard } from "../../../utils/apiUtils"

export function PokeCard({pokemon}){

    const [pokeData, setPokeData, cache] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function obtenerDatos(){
            
            if(pokemon){
                const datos = await getPokemonDataCard(pokemon?.entry_number, cache)
                setPokeData(datos)
            }
        }
        obtenerDatos()

    }, [pokemon])
    
    return(
        <article className="pokeCard" onClick={()=>navigate(`/pokemon/${pokeData?.id}`)}>
            <div className="pokeCard__topCard">
                <img
                className="pokeCard__topCard__foto"
                src={pokeData?.image}
                alt={pokeData?.name}
                />
                <p>{pokeData?.id}</p>
            </div>
            <div className="pokeCard__bottonCard">
                <div className="pokeCard__bottonCard__nombre-y-tipos">
                    <h1 className="pokeCard__bottonCard__nombre-y-tipos__nombre">{pokeData?.name}</h1>
                    <div className="pokeCard__bottonCard__nombre-y-tipos__tipos">
                        {pokeData?.types?.map((elem)=>{
                            return(
                                <p key={elem.type.name} className={`tipo-${elem.type.name}`}>{elem.type.name}</p>
                            )
                        })}
                    </div>
                </div>
                {pokeData?.evolves_from_species && 
                <div className="pokeCard__bottonCard__preEv">
                    <div className="pokeCard__bottonCard__preEv__barra">
                    </div>
                        <div>
                            <h2>Evoluciona de:</h2>
                            <p>{pokeData?.evolves_from_species.name}</p>
                        </div>
                </div>}
            </div>      
        </article>
    )
}