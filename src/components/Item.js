import React from 'react';
import Quantity from './Quantity.js'

const Item = props => (
  <div>
  {
    props.items.map((item,index) =>
      <p key={index}><h3> {item}</h3><Quantity /></p>)
    }
  </div>
  )

export default Item;
