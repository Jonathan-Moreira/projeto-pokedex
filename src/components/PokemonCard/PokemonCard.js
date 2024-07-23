import { PokeCardContainer, ButtonContainer, ImgContainer, PokeImg, PokeSection, ButtonAdicionar, Buttondetails,LogoImg, PokebolaImg, PokebolTransp} from "./styled"
import { useLocation, useNavigate } from "react-router-dom"
import { goToDetailPage } from "../../Router/coordinator"
import { returnTypes } from "../../utilidades/returnTypes"
import { returnBackgrounColorCard } from "../../utilidades/returnBackgroundColorCard"
import bolinha from "../../assets/pokes/bolinha.png"
import pokebolaT from "../../assets/pokes/pokebolaT.png"
const PokemonCard = ({ poke, pokedex, setPokedex, adcionaPokemon, removerPokemon }) => {


    const navigate = useNavigate()

    const { pathname } = useLocation()
   
    const changeFirstLetter = (name) => {
        return name[0].toUpperCase() + name.substring(1)
    }

    return (
        <PokeCardContainer type={returnBackgrounColorCard(poke.types[0].type.name)}>
            <PokeSection>
                <p>#{poke.id.toString().length === 1?`0${poke.id}` : poke.id}</p>
                <h1>{changeFirstLetter(poke.name)}</h1>
                <div>
                    {poke.types.map((type) => {
                        return <LogoImg src={returnTypes(type.type.name)} />
                    })}
                </div>
            </PokeSection>
            <ImgContainer>
            <PokebolaImg src={bolinha}/>
            <PokebolTransp src={pokebolaT}/>
                <PokeImg src={poke.sprites.other["official-artwork"].front_default} alt={`imagens dos Pokemons ${poke.name}`} />
            </ImgContainer>
            <ButtonContainer>
                <Buttondetails onClick={() => goToDetailPage(navigate, poke.name)}>Detalhes</Buttondetails >
                {pathname === "/" ? (
                    <ButtonAdicionar onClick={() => adcionaPokemon(poke)}>Adicionar</ButtonAdicionar>
                ) : (
                    <ButtonAdicionar onClick={() => removerPokemon(poke.name)}>Remover</ButtonAdicionar>)}

            </ButtonContainer>
        </PokeCardContainer>
    )

}

export default PokemonCard;

 