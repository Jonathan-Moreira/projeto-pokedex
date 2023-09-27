import axios from "axios"

export const getAllPoke = (setData) => {
    axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then((res) => {
            const poksResultado = res.data.results
            const novaRequest = poksResultado.map((pokes) => axios.get(pokes.url))
            Promise.all(novaRequest).then((res) => {
                const pokeData = res.map((pokemon) => pokemon.data)
                setData(pokeData)
                
            })
        }).catch((err) => {
            console.log(err)
        })

}


export const getPokemonByName = (name, setData) => 
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
        setData(res.data)
    }).catch((err) => {
        console.log(err)
        
    })
    
