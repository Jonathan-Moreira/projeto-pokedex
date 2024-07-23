import { useLocation, useNavigate } from "react-router-dom";
import { EsquerdaHeaderButton, HeaderContainer, DireitaHeaderButton, LogoImg, BolinhaPoke } from "./styled";
import { goToPokedexPage, goToPokemonsListPage } from "../../Router/coordinator";
import { getPokemonByName} from "../../API/requests"
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import pokemonlogo from "../../assets/pokes/pokemonlogo.png"

const Header = () => {
    let botaoEsquerdaTexto
    let proximaPagina

     const {pathname} = useLocation()
     const navigate = useNavigate()
     const pokeName = pathname.split("/") [2]

     const { pokedex, setPokedex, removerPokemon,} = useContext(GlobalStateContext)


     const isPokemonInPokedex = pokedex.find((poke) => poke.name === pokeName)
     const addPokedex = (name) => {
       getPokemonByName(name, (pokeData) => {
            setPokedex([...pokedex, pokeData])
        } )
     }
   
     if (pathname === "/") {
    proximaPagina = () => goToPokedexPage (navigate)

     } else if (pathname === "/pokedex") {
            botaoEsquerdaTexto = "Todos Pokémons"
            proximaPagina = () => goToPokemonsListPage (navigate)

     } else if (pathname.includes("/detalhes/")) {
        botaoEsquerdaTexto = "Todos Pokémons"
        proximaPagina = () => goToPokemonsListPage (navigate)
     } 




    return (
        <HeaderContainer>
         
            {pathname === "/pokedex" || pathname.includes("/detalhes") ?
            
            <EsquerdaHeaderButton onClick ={proximaPagina}>{botaoEsquerdaTexto}</EsquerdaHeaderButton>:
            
            <DireitaHeaderButton onClick ={proximaPagina}><b>Pokédex</b></DireitaHeaderButton>
            
            }
            
            <LogoImg src={pokemonlogo}/>
            { pathname.includes("/detalhes/") && (isPokemonInPokedex ? (
                <DireitaHeaderButton red onClick ={() => removerPokemon (pokeName)}>Excluir da Pokedex</DireitaHeaderButton>
             ) : ( 
                <DireitaHeaderButton onClick={() => addPokedex (pokeName)}>Adiconar a Pokedex</DireitaHeaderButton>
               
               ))}

        </HeaderContainer>
    )

}

export default Header;