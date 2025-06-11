import "./pokedex.css"
import { useContext, useEffect } from "react"
import { PokemonContext } from "../../../context/ContextProvider"
import { Buscador } from "../../../components/Pokedex/Buscador/Buscador"
import { PokeContainer } from "../../../components/Pokedex/PokeContainer/PokeContainer"
import { Header } from "../../../components/Pokedex/Header/Header"
import { Footer } from "../../../components/Pokedex/Footer/Footer"

export function Pokedex(){

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
        <main className="pokedexMain">
            <Header />
            <section className="PokeHome">
                <Buscador reiniciar={obtener20primeros}/>
                {cargando && <h1>Cargando...</h1>}
                {lista && <PokeContainer lista={lista} />}
                {verCargarMas && <button onClick={cargarMas} className="PokeHome__cargarMas">Cargar más</button>}
            </section>
            <Footer />
        </main>
    )
}