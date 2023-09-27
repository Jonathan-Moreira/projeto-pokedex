import { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokemonListContainer } from "./styled";
import { getAllPoke } from "../../API/requests";


const PokemonListPage = ({ pokedex, setPokedex, adcionaPokemon }) => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getAllPoke(setPokemons)
    }, [])

    const filtrarPokes = pokemons.filter((pokemon) => !pokedex.find((poke) => poke.name === pokemon.name))




    return (
        <PokemonListContainer>
            {
                filtrarPokes.map((poke) => {
                    return (
                        <PokemonCard
                            key={poke.id}
                            poke={poke}
                            pokedex={pokedex}
                            setPokedex={setPokedex}
                            adcionaPokemon={adcionaPokemon}
                        />
                    )
                })
            }
        </PokemonListContainer>
    )

}

export default PokemonListPage;