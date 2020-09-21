import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.createPokemon}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.props.input.name} onChange={this.props.getInput} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.props.input.hp} onChange={this.props.getInput} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.props.input.frontUrl} onChange={this.props.getInput} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.props.input.backUrl} onChange={this.props.getInput} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
