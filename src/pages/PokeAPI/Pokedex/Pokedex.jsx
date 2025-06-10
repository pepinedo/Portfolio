import { useContext, useEffect, useState } from "react"
import "./pokedex.css"
import { ContextProvider, PokemonContext } from "../../context/ContextProvider"
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { PokeContainer } from "../../components/PokeContainer/PokeContainer";
import { Buscador } from "../../components/Buscador/Buscador";

export function Home(){

    const {allPokemon, cargando, lista, setLista, verCargarMas, setVerCargarMas} = useContext(PokemonContext)

    async function obtener20primeros(){
        let obtenerLista = []
        for(let i = 0; i < 20; i++){
            obtenerLista.push(allPokemon[i])
        }
        setLista(obtenerLista)
    }
    useEffect(()=>{
        obtener20primeros()
        setVerCargarMas(true)
    },[allPokemon])

    function cargarMas(){
        let listaAux = [...lista]
        for(let i = lista.length; i < lista.length + 20; i++){
            listaAux.push(allPokemon[i]); 
        }
        setLista(listaAux)
    }
    

    return(
        <section className="Home">
            <Buscador reiniciar={obtener20primeros}/>
            {cargando && <h1>Cargando...</h1>}
            {lista && <PokeContainer lista={lista} />}
            {verCargarMas && <button onClick={cargarMas} className="Home__cargarMas">Cargar más</button>}
        </section>
    )
}