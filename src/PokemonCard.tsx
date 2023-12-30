import { useEffect, useState } from 'react'
import { pokemonApi } from './api'

type PropsType = {
  name: string
  id: number
}

const PokemonCard = ({ name, id }: PropsType) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        const pokemonInfo = await pokemonApi.getPokemonImage(id)
        setImageUrl(pokemonInfo.sprites.back_default)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPokemonImage()
  }, [id])

  return (
    <div className="flex items-center justify-between bg-blue-400 rounded-xl w-52 h-20 px-5">
      <img src={imageUrl} />
      <div>{name}</div>
    </div>
  )
}

export default PokemonCard
