import React, { Component } from 'react';
import Item from '../components/Item.js';
import Samples from './samples.js'

class InventoryList extends Component {

  createList = () => {
    return Samples.map((item, index) => <Item key={index}
    name={item.name}
    quantity={item.quantity}
    />)
  }

  render() {
    return (
      <div className="list">
      These are the Items currently in your kitchen:
      {this.createList()}
      </div>
    )
  }
}

export default InventoryList;
