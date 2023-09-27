import { getPokemonByName } from "../../API/requests";
import { PokeInfosContainer, ImagesContainer, ImgWrapper, StatsContainer, TitleContainer, TypeAndMovesContainer, TypesContainer, MovesContainer } from "./styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const PokemonDetailPage = () => {

    const [pokemon, setPokemon] = useState([])
    const { nome } = useParams()



    useEffect(() => {
        getPokemonByName(nome, setPokemon)
    }, [])
    return (
        <>
            <PokeInfosContainer>
                <ImagesContainer>
                    <ImgWrapper src={pokemon.sprites?.front_default} />
                    <ImgWrapper src={pokemon.sprites?.back_default} />
                </ImagesContainer>
                <StatsContainer>
                    <TitleContainer>Poderes</TitleContainer>
                    {
                        pokemon.stats?.map((poke) => {
                            return (
                                <p><strong>{poke.stat.name}</strong>: {poke.base_stat}</p>
                            )
                        })
                    }
                </StatsContainer>
                <TypeAndMovesContainer>
                    <TypesContainer>
                        {
                            pokemon.types?.map((poke) => {
                                return (
                                    <p><strong>{poke.type.name}</strong></p>
                                )
                            })
                        }
                    </TypesContainer>
                </TypeAndMovesContainer>
                <MovesContainer>
                    <TitleContainer>Ataques Principais</TitleContainer>
                    {
                        pokemon.moves?.map((poke, index) => {
                            return (
                                index < 5 && <p key={index}>{poke.move.name}</p>
                            )
                        })
                    }
                </MovesContainer>
            </PokeInfosContainer>
        </>
    )
}






























export default PokemonDetailPage;