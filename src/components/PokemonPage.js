import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemons => this.setState(() => ({pokemons: pokemons})))
  }

  getSearchTerm = e => {
    this.setState({searchTerm: e.target.value})
  }

  filteredPokemons = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search searchTerm={this.state.searchTerm} getSearchTerm={this.getSearchTerm}/>
        <br />
        <PokemonCollection pokemons={this.filteredPokemons()}/>
      </Container>
    )
  }
}

export default PokemonPage
