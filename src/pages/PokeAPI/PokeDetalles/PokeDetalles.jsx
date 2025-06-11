import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./pokeDetalles.css"
import { getPokemonDataDetalles } from "../../../utils/apiUtils";
import { Footer } from "../../../components/Pokedex/Footer/Footer";
import { Header } from "../../../components/Pokedex/Header/Header";
import { h2, p } from "framer-motion/client";

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

    }, [id])

    function anterior(){
        let aux = parseInt(id)
        navigate(`/pokemon/${aux - 1}`)
    }

    function siguiente(){
        let aux = parseInt(id)
        navigate(`/pokemon/${aux + 1}`)
    }

    function estrellitas(n){
        const cantidad = parseInt(n / 30);
        return '⭐'.repeat(cantidad);
    }    
    
    return (
        <section className="pokeDetalles">
            <Header />
            <article className="PokeDetallesInfo">
                <div className="pokeDetalles__botones">
                    {id !== "1" && <img 
                        className="pokeDetalles__pag" 
                        src="/Pokedex/icons/left-arrow.png" 
                        alt="botón de anterior" 
                        onClick={anterior}
                        />}
                    <button onClick={()=>navigate("/pokedex")}>Home</button>
                    {id !== "1025" && <img 
                        className="pokeDetalles__pag" 
                        src="/Pokedex/icons/arrow-right.png" 
                        alt="botn de siguiente"
                        onClick={siguiente}
                        />}
                </div>
                <img className="pokeDetalles__foto" src={pokeData?.image} alt={`Dibujo oficial de ${pokeData?.name}}`} />
                <h1 className="pokeDetalles__nombre">{pokeData?.name}</h1>

                <div className="pokeDetalles__detalles">
                    {pokeData?.evolves_from_species && <p><span>Evoluciona de:</span> <em>{pokeData?.evolves_from_species.name}</em></p>}
                    <div className="pokeDetalles__tipos">
                        <h2>{pokeData?.types?.length == 2 ? "Tipos" : "Tipo"}:</h2>
                        <div>
                            {pokeData?.types?.map((elem)=>{
                                return(
                                    <p key={elem.type.name} className={`tipo-${elem.type.name}`}>{elem.type.name}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className="pokeDetalles__fisico">
                        <h2>Físico: </h2>
                        <div>
                            <p><span>Peso:</span> {pokeData?.weight} kg</p>
                            <p><span>Altura:</span> {pokeData?.height / 10} m</p>
                        </div>
                    </div>
                    <div className="pokeDetalles__stats">
                        <h2>Stats:</h2>
                        <div>
                            {pokeData?.stats?.map((elem)=>{
                                return(
                                    <p key={elem.stat.name}><span>{elem.stat.name}</span>: {estrellitas(elem.base_stat)} </p>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </article>
            <Footer />
        </section>
    )
}