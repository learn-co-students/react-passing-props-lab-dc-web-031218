import React, { Component } from 'react';


/*
  props = {
    filter: "",
    fruit: []
  }
*/
const FilteredFruitList = (props) => {
    const list = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
    return (
      <ul className="fruit-list">
        {list && list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: "all"
}

export default FilteredFruitList;
