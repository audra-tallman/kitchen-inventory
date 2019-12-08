import React, { Component } from 'react';

class Item extends Component {
  render() {
    return(
      <div>
        {this.props.name}: {this.props.quantity}
      </div>
    )
  }
}

export default Item;
