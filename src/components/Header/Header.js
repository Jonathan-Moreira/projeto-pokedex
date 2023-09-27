import { useLocation, useNavigate } from "react-router-dom";
import { EsquerdaHeaderButton, HeaderContainer, DireitaHeaderButton } from "./styled";
import { goToPokedexPage, goToPokemonsListPage } from "../../Router/coordinator";

const Header = ({ pokedex, setPokedex, removerPokemon}) => {
    let tituloPagina
    let botaoEsquerdaTexto
    let proximaPagina

     const {pathname} = useLocation()

     const navigate = useNavigate()

     if (pathname === "/") {
        tituloPagina = "Lista de Pokemons"
            botaoEsquerdaTexto = "Ver minha Pokedex"
            proximaPagina = () => goToPokedexPage (navigate)

     } else if (pathname === "/pokedex") {
        tituloPagina = "Pokedex"
            botaoEsquerdaTexto = "Voltar para lista de Pokemons"
            proximaPagina = () => goToPokemonsListPage (navigate)

     } else if (pathname.includes("/detalhes/")) {
        tituloPagina = pathname.split("/") [2]
        botaoEsquerdaTexto = "Voltar"
        proximaPagina = () => goToPokemonsListPage (navigate)
     } 




    return (
        <HeaderContainer>
            <EsquerdaHeaderButton onClick = {proximaPagina}> {botaoEsquerdaTexto}</EsquerdaHeaderButton>
            <h1>{tituloPagina}</h1>

            {
                pathname.includes("/detalhes/") ? (
                <DireitaHeaderButton>Adicionar / Remover da Pokedex</DireitaHeaderButton>)

                :
                (
                <></>
                )
            }
        </HeaderContainer>
    )

}

export default Header;