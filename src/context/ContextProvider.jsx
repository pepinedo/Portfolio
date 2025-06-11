import { createContext, useEffect, useState } from "react";
import { getAllPokemons } from "../utils/apiUtils";

export const PokemonContext = createContext()

export function ContextProvider({children}){

    const [allPokemon, setAllPokemon] = useState([])
    const [cargando, setCargando] = useState([false])
    const [lista, setLista] = useState([])
    const [cache, setCache] = useState([])
    const [verCargarMas, setVerCargarMas] = useState(true)

    useEffect(()=>{
        async function Init(){
            setCargando(true)

            const pokemons = await getAllPokemons("https://pokeapi.co/api/v2/pokedex/1")
            setAllPokemon(pokemons?.pokemon_entries)
            
            setCargando(false)
        }
        Init()

    },[])
    

    return(
        <PokemonContext.Provider value={{
            allPokemon,
            cargando,
            lista,
            setLista,
            verCargarMas,
            setVerCargarMas
        }}>
            {children}
        </PokemonContext.Provider>
    )
}