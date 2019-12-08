import React from 'react';

const Item = props => (
  <div>
  {
    props.items.map((item,index) =>
      <p key={index}>{item}</p>)
    }
  </div>
)

export default Item;
