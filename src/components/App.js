import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			filters: [],
			currentFilter: null,
			fruit: []
		}
	}
	componentWillMount(){
		this.fetchFilters();
	}

	componentDidMount() {
	    fetch('/api/fruit')
	      .then(response => response.json())
	      .then(fruit => this.setState({ fruit }));
	}

	handleFilterChange = (e) =>{
	    console.log('new filter: ', e.target.value);
	    this.setState({
	     currentFilter: e.target.value
	    });
	}

	fetchFilters = () => {
		fetch('/api/fruit_types')
		  .then(response => response.json())
		  .then(filters => this.setState({ filters }));
	}

	render(){
		return(
			<FruitBasket handleChange={this.handleFilterChange}
					 	 filter={this.state.currentFilter}
					 	 filters={this.state.filters}
					 	 fetchFilters={this.fetchFilters}
					 	 fruit={this.state.fruit}/>
		)
	}
} 

export default App;
