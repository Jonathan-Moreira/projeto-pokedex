import { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokedexContainer } from "./styled";
import { GlobalStateContext } from "../../Global/GlobalStateContext";



const PokedexPage = () => {
    const { pokedex, removerPokemon } = useContext(GlobalStateContext)
    return (
        <PokedexContainer>
            {pokedex.map((poke) => {
                return <PokemonCard poke={poke} removerPokemon={removerPokemon} />
            })}
        </PokedexContainer>
    )
}

export default PokedexPage;