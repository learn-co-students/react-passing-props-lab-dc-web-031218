import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

/*
  props = {
    handleChange: cbf(),
    filter: "",
    filters: [],
    fruit: []
  }
*/
const FruitBasket = (props) => {
    return(
        <div className="fruit-basket">
          <Filter handleChange={props.handleChange} 
                  filters={props.filters}/>
          <FilteredFruitList
            filter={props.filter}
            fruit={props.fruit} />
        </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: "all",
  updateFilterCallback: null
}
export default FruitBasket;
