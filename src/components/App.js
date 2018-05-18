import React from "react";
import FruitBasket from "./FruitBasket";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    };
  }
  componentWillMount() {
    this.fetchFilters();
  }

  componentDidMount() {
    fetch("/api/fruit")
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch("/api/fruit_types")
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  };
  render() {
    return (
      <FruitBasket
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        fruit={this.state.fruit}
        handleChange={event => {
          this.setState({ currentFilter: event.target.value });
        }}
      />
    );
  }
}

export default App;
