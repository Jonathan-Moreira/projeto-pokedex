import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonListPage from "../pages/pokemonsListPage/PokemonsListPage";
import PokedexPage from "../pages/pokedexPage/PokedexPage";
import PokemonDetailPage from "../pages/pokemonDetailPage/PokemonDetailPage";
import Header from "../components/Header/Header";
import { useState } from "react";

const Router = () => {
    const [pokedex, setPokedex] = useState([])

    const adcionaPokemon = (pokemon) => {
       setPokedex([...pokedex, pokemon])
    }

    const removerPokemon = (pokeName) => {
        setPokedex(pokedex.filter((poke) => poke.name !== pokeName))
    }

    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path = "/" element = {<PokemonListPage pokedex={pokedex} setPokedex={setPokedex} adcionaPokemon={adcionaPokemon}/>} />
            <Route path = "/pokedex" element = { <PokedexPage pokedex={pokedex} setPokedex={setPokedex} removerPokemon={removerPokemon}/>} />
            <Route path = "/detalhes/:nome" element = { <PokemonDetailPage/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router