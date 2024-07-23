import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonListPage from "../pages/pokemonsListPage/PokemonsListPage";
import PokedexPage from "../pages/pokedexPage/PokedexPage";
import PokemonDetailPage from "../pages/pokemonDetailPage/PokemonDetailPage";
import Header from "../components/Header/Header";


const Router = () => {

    return (
        <BrowserRouter>
        <Header/>
        <Routes>
           <Route path="/" element={<PokemonListPage/>} />
           <Route path ="/pokedex" element={<PokedexPage/>} />
           <Route path="/detalhes/:nome" element={<PokemonDetailPage/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router