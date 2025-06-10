import { useNavigate, useParams } from "react-router-dom";
import "./pokeDetalles.css"
import { useEffect, useState } from "react";
import { getPokemonDataDetalles } from "../../utils/apiUtils";

export function PokeDetalles(){

    const navigate = useNavigate()
    const {id} = useParams()
    const [pokeData, setPokeData] = useState({})

    useEffect(()=>{

        async function obtenerDatos(){
            const datos = await getPokemonDataDetalles(id)
            setPokeData(datos)
        }

        if(id > 1025){
            navigate("/pokemon/1025")
        }
        obtenerDatos()

    }, [pokeData, id])

    function anterior(){
        let aux = parseInt(id)
        navigate(`/pokemon/${aux - 1}`)
    }

    function siguiente(){
        let aux = parseInt(id)
        navigate(`/pokemon/${aux + 1}`)
    }
    
    
    return (
        <article className="pokeDetalles">
            <div className="pokeDetalles__botones">
                {id !== "1" && <img 
                    className="pokeDetalles__pag" 
                    src="/icons/left-arrow.png" 
                    alt="botón de anterior" 
                    onClick={anterior}
                    />}
                <button onClick={()=>navigate("/")}>Home</button>
                {id !== "1025" && <img 
                    className="pokeDetalles__pag" 
                    src="/icons/arrow-right.png" 
                    alt="botn de siguiente"
                    onClick={siguiente}
                    />}
            </div>
            <img className="pokeDetalles__foto" src={pokeData?.image} alt={`Dibujo oficial de ${pokeData?.name}}`} />
            <h1 className="pokeDetalles__nombre">{pokeData?.name}</h1>
            <div className="pokeDetalles__masInfo">
                <p>Peso: {pokeData?.weight} kg</p>
                <p>Altura: {pokeData?.height / 10} m</p>
                {pokeData?.evolves_from_species && <p>Evoluciona de: <em>{pokeData?.evolves_from_species.name}</em></p>}
            </div>
        </article>
    )
}