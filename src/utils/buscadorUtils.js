
export function buscarPorNombre(text, allPokemon, lista){
    
    let busqueda = []
    for(let pokemon of allPokemon){
        if(pokemon.pokemon_species.name.includes(text.toLowerCase())){
            busqueda.push(pokemon)
        }
    }
    return busqueda;
}

export function buscarPorNumero(numero, allPokemon, lista){
    
    let busqueda = []
    for(let pokemon of allPokemon){
        if(pokemon.entry_number == numero){
            busqueda.push(pokemon)
        }
    }
    return busqueda;
}