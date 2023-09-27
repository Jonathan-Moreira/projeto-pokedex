import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokedexContainer } from "./styled";



const PokedexPage = ({pokedex, setPokedex, removerPokemon}) => {

 console.log(pokedex)
    return (
        <PokedexContainer>
            {pokedex.map((poke) => {
                return <PokemonCard poke={poke} removerPokemon={removerPokemon}/>
            })}
        </PokedexContainer>
    )
}

export default PokedexPage;