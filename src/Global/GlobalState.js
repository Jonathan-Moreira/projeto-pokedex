import { GlobalStateContext } from "./GlobalStateContext";
import { useState } from "react"

const GlobalState = ({children}) => {
    const [pokedex, setPokedex] = useState([])

    const adcionaPokemon = (pokemon) => {
       setPokedex([...pokedex, pokemon])
    }   

    const removerPokemon = (pokeName) => {
        setPokedex(pokedex.filter((poke) => poke.name !== pokeName))
    }
    
 const data = {
    pokedex,
    setPokedex,
    adcionaPokemon,
    removerPokemon
 }

    return <GlobalStateContext.Provider value={data}>{children}</GlobalStateContext.Provider>
}

export default GlobalState        