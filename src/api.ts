import axios from 'axios'

type APIResponseType = {
  results: PokemonType[]
}

type PokemonInfo = {
  sprites: {
    back_default: string
  }
}

export type PokemonType = {
  name: string
  url: string
}

export const pokemonApi = {
  getPokemons() {
    return axios.get<APIResponseType>('https://pokeapi.co/api/v2/pokemon/').then((res) => {
      console.log(res)
      return res.data.results
    })
  },
  getPokemonImage(pokemonId: number) {
    return axios.get<PokemonInfo>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((res) => {
      console.log(res)

      return res.data
    })
  },
}
