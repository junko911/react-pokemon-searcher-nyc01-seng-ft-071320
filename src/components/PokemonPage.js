import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: "",
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
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
    if (!!this.state.searchTerm) {
      return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    }
    return this.state.pokemons
  }

  createPokemon = e => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    }
    fetch("http://localhost:3000/pokemon", options)
    .then(res => res.json())
    .then(pokemon => {
      const newPokemons = [...this.state.pokemons]
      newPokemons.push(pokemon)
      e.persist()
      this.setState(() => ({
        pokemons: newPokemons,
        name: "",
        hp: "",
        frontUrl: "",
        backUrl: ""
      }))
    })
  }

  getInput = e => {
    e.persist()
    this.setState(() => ({
      [e.target.name]: e.target.value
    }))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon} input={this.state} getInput={this.getInput}/>
        <br />
        <Search searchTerm={this.state.searchTerm} getSearchTerm={this.getSearchTerm}/>
        <br />
        <PokemonCollection pokemons={this.filteredPokemons()}/>
      </Container>
    )
  }
}

export default PokemonPage
