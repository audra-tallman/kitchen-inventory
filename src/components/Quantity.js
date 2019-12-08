import React, { Component } from 'react';

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  render() {
    return (
      <div>
        You have: { this.state.clicks }<br/>
        <button onClick={this.IncrementItem}>Add 1</button><br/>
        <button onClick={this.DecreaseItem}>Remove 1</button>
      </div>
    );
  }
}


export default Quantity;
