import { getPokemonByName } from "../../API/requests";
import { returnBackgrounColorCard } from "../../utilidades/returnBackgroundColorCard";
import { PokeInfosContainer, ImagesContainer, ImgWrapper, StatsContainer, TitleContainer, TypeAndMovesContainer, TypesContainer, MovesContainer, LogoImg, PokeImg, PokebolTransp, ProgressoContainer, BarraProgresso, PStatusNome, PStatusNumeros, DivProgresso, MainTudoDoContainer } from "./styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { returnTypes } from "../../utilidades/returnTypes";
import pokebolaT from "../../assets/pokes/pokebolaT.png"



const PokemonDetailPage = () => {

    const [pokemon, setPokemon] = useState({})
    const { nome } = useParams()

    let pokemonType
   

    if ("types" in pokemon) {
        pokemonType = returnBackgrounColorCard(pokemon.types[0].type.name);
    }




    useEffect(() => {
        getPokemonByName(nome, setPokemon)
    }, [])

    const changeFirstLetter = (name) => {
        return name[0].toUpperCase() + name.substring(1)
    }

    return (
        <MainTudoDoContainer>
            <PokeInfosContainer colorType={pokemonType}>

                <ImagesContainer>
                    <ImgWrapper src={pokemon.sprites?.front_default} />
                    <ImgWrapper src={pokemon.sprites?.back_default} />
                </ImagesContainer>
                <StatsContainer>
                    <TitleContainer>Poderes</TitleContainer>
                    <ProgressoContainer>
                        {pokemon.stats?.map((poke, index) => {
                            return (
                                <section>
                                    <PStatusNome key={index}><strong>{poke.stat.name}</strong>:</PStatusNome>
                                    <PStatusNumeros>{poke.base_stat}</PStatusNumeros>
                                    <DivProgresso>
                                        <BarraProgresso widthBar={poke.base_stat}></BarraProgresso>
                                    </DivProgresso>

                                </section>
                            )
                        })
                        }
                    </ProgressoContainer>
                </StatsContainer>
                <PokebolTransp src={pokebolaT} />
                <PokeImg src={pokemon.sprites?.other["official-artwork"].front_default} alt={`imagens dos Pokemons ${pokemon?.name}`} />

                <TypeAndMovesContainer>
                    <TypesContainer>
                        <p>#{pokemon.id}</p>
                        <h1>{pokemon.name}</h1>
                        <div>
                            {pokemon.types?.map((poke, index) => {
                                return (
                                    <LogoImg key={index} src={returnTypes(poke.type.name)} />
                                );
                            })}

                        </div>
                    </TypesContainer>

                    <MovesContainer>
                        <TitleContainer>Ataques</TitleContainer>
                        {
                            pokemon.moves?.map((poke, index) => {
                                return (
                                    index < 5 && <p key={index}>{poke.move.name}</p>
                                )
                            })
                        }
                    </MovesContainer>
                </TypeAndMovesContainer>
            </PokeInfosContainer>
        </MainTudoDoContainer>
    )
}






























export default PokemonDetailPage;