import { useEffect, useState } from 'react'
import './App.css'
import { PokemonType, pokemonApi } from './api'
import PokemonCard from './PokemonCard'

function App() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])

  useEffect(() => {
    pokemonApi.getPokemons().then((res) => {
      setPokemons(res)
    })
  }, [])

  return (
    <>
      <div className="flex flex-col text-red-400 text-xl">
        <h1 className="mb-5">Geeks | Pokemons</h1>
        <div className="flex flex-col gap-4 w-full">
          {pokemons.map((poke, index) => (
            <PokemonCard name={poke.name} id={index + 1} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
