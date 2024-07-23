// import { useState } from "react"
// import Header from "./components/Header/Header"
// import { getAllPoke } from "./API/requests"
import GlobalState from "./Global/GlobalState"
import Router from "./Router/Router"


export default function App() {
    
    // const [pokemons, setPokemons] = useState([])



    return (
        <GlobalState>
            {/* <Header page={page} setPage={setPage} /> */}
            <Router/>

        </GlobalState>
    )
}

