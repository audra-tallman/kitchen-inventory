import React, { Component } from 'react';
import Item from './Item.js'

class Inventory extends Component{
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        items: [],
      };
    }

  OnChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  OnSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: '',
      items: [...this.state.items, this.state.name]
    })
  }

  render() {
    return(
      <div>
      <h3>Add an Item to your Inventory:</h3>

        <form onSubmit={this.OnSubmit}>
          <input
            value={this.state.name}
            onChange={this.OnChange}
          />
          <button type="Submit">Add Item</button>
        </form>
        <hr/>
        <Item items={this.state.items} />
      </div>
    )
  }
}

export default Inventory;
