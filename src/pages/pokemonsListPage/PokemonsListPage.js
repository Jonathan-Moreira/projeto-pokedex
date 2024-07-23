import { useContext, useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokemonListContainer, Titulo, SectionPokemons } from "./styled";
import { getAllPoke } from "../../API/requests";
import { GlobalStateContext } from "../../Global/GlobalStateContext";


const PokemonListPage = () => {
    const [pokemons, setPokemons] = useState([])
    const { pokedex, setPokedex, adcionaPokemon} = useContext(GlobalStateContext)

    useEffect(() => {
        getAllPoke(setPokemons)
    }, [])

    const filtrarPokes = pokemons.filter((pokemon) => !pokedex.find((poke) => poke.name === pokemon.name))




    return (
        <PokemonListContainer>
        <Titulo> Todos Pokémons</Titulo>
        <SectionPokemons>
        {filtrarPokes.map((poke) => {
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
        </SectionPokemons>
           
        </PokemonListContainer>
    )

}

export default PokemonListPage;