export const API_URL = "https://pokeapi.co/api/v2/"

export async function getAllPokemons(url){

    const response = await fetch(url)

    if(response.ok){
        const data = await response.json()
        return data
    }
}

export async function getPokemonData(url){

    const response = await fetch(url)

    if(response.ok){
        const data = await response.json()
        return data
    }
}

export async function getPokemonDataCard(id){

        const datos1 = await getPokemonData(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        const datos2 = await getPokemonData(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    
        let {name, types} = datos1
        let image = datos1?.sprites?.front_default
        let {evolves_from_species} = datos2
    
        return {id, name, image, types, evolves_from_species} 

}

export async function getPokemonDataDetalles(id){

    const datos1 = await getPokemonData(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
    const datos2 = await getPokemonData(`https://pokeapi.co/api/v2/pokemon-species/${id}`)

    let {name, types, height, weight, stats} = datos1
    let image = datos1?.sprites?.other["official-artwork"].front_default
    let {evolves_from_species} = datos2

    return {name, image, types, evolves_from_species, height, weight, stats} 
}
