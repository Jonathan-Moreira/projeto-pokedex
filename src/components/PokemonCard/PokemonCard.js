import { PokeCardContainer, ButtonContainer, ImgContainer, PokeImg} from "./styled"

import { useLocation, useNavigate } from "react-router-dom"
import { goToDetailPage } from "../../Router/coordinator"

const PokemonCard = ({poke, pokedex, setPokedex, adcionaPokemon, removerPokemon})=> {
    

    const navigate = useNavigate()

    const {pathname} = useLocation()
    

    return (
        <PokeCardContainer>
            <ImgContainer>
            <PokeImg src={poke.sprites.front_default} alt= {`imagens dos Pokemons ${poke.name}`} />
            </ImgContainer>
            <ButtonContainer>
                {
                  pathname === "/"?
                  <button onClick={() => adcionaPokemon(poke)}>Adicionar</button>
                  :
                  <button onClick={() => removerPokemon(poke.name)}>Remover</button>
                }

                
                <button onClick = {() => goToDetailPage(navigate, poke.name)}>Ver Detalhes</button>
            </ButtonContainer>
        </PokeCardContainer>
    )
    
}

export default PokemonCard;

 