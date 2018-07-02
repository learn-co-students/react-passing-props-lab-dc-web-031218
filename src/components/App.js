import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';
import React, { Component } from 'react';
 
 export class App extends Component {
 	constructor(props){
 		super(props)
 		this.state = {
 			fruit: [],
 			filters: [],
 			currentFilter: null
 		}
 	}
	
  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({filters: filters}));
  }

 	handleChange(filters){
 		this.setState({...this.state, filters: filters})
 	}

 	render() {
 		return (
 			<div>
 				 <FruitBasket>
 				 	<Filter filters={this.state.filters} handleChange={this.handleChange} />
 				 	<FilteredFruitList fruit ={this.state.fruit} filter={this.state.currentFilter} />
 				 </FruitBasket>
 			</div>
 		);
 	}
 }

export default App;
