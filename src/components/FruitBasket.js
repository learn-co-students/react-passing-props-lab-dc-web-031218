import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter />
        <FilteredFruitList />
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: "",
  filters: [],
  currentFilter: "",
  updateFilterCallback: ""
}

export default FruitBasket;
