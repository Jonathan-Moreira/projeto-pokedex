export const goToPokemonsListPage = (navigate) => {
  navigate ("/")
}

export const goToPokedexPage = (navigate) => {
    navigate ("/pokedex")
}

export const goToDetailPage = (navigate, name) => {
    navigate (`/detalhes/${name}`)
}