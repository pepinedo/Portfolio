import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./buscador.css"
import { PokemonContext } from "../../../context/ContextProvider";
import { buscarPorNombre, buscarPorNumero } from "../../../utils/buscadorUtils";

export function Buscador({reiniciar}){    

    const {allPokemon, lista, setLista, setVerCargarMas} = useContext(PokemonContext)
    const [buscador, setBuscador] = useState("")
    const [filtro, setFiltro] = useState("nombre")
    const navigate = useNavigate()
    

    function handleForm(e){
        e.preventDefault();
        if(filtro === "nombre" && buscador.length >= 2){
            setLista(buscarPorNombre(buscador, allPokemon, lista))
        }
        if(filtro === "id"){
            setLista(buscarPorNumero(buscador, allPokemon, lista))
            
        }
        setBuscador("")
        setVerCargarMas(false)
    }

    function handleFilter(nuevoFiltro){
        setFiltro(filtro === nuevoFiltro ? nuevoFiltro : nuevoFiltro)
    }    

    return(
    <>
        <form className="buscador" onSubmit={(e)=>handleForm(e)}>
            <input 
                className="buscador__input" 
                type="text" 
                placeholder="Filtra pokemons por su nombre..." 
                value={buscador} 
                onChange={(e)=>setBuscador(e.target.value)} />
        </form>
        <fieldset className="buscador__filtros">
            <button onClick={reiniciar} className="buscador__reiniciar">Reiniciar</button>
            <div className="buscador__filtros__filtro">
                <label htmlFor="nombre">
                    <input 
                        type="radio" 
                        id="nombre" 
                        name="filtro" 
                        value="nombre"
                        checked={filtro === "nombre"}
                        onChange={()=>handleFilter("nombre")}
                    />
                    Nombre
                </label>
            </div>
            <span></span>
            <div className="buscador__filtros__filtro" >
                <label htmlFor="id">
                    <input 
                        type="radio" 
                        id="id" 
                        name="filtro" 
                        value="id"
                        checked={filtro === "id"}
                        onChange={()=> handleFilter("id")}
                    />
                    Número
                </label>
            </div>
        </fieldset>
    </>
    )
}