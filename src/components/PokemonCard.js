import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  togglePokemonImage = () => {
    this.setState(() => ({clicked: !this.state.clicked}))
  }

  render() {
    const imageSrc = this.state.clicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front

    return (
      <Card>
        <div onClick={this.togglePokemonImage}>
          <div className="image">
            <img alt="oh no!" src={imageSrc}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
