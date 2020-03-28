import React, { Component } from 'react';
import './App.css';
import TripAdvisorService from './service/trip_advisor_service';

import Restaurant from './components/Restaurant';

class App extends Component {
  constructor(props) {
    super(props);

    const service = new TripAdvisorService();

    this.state = {
      restaurants: service.findRestaurants("35.7345", "-86.9117", "35.8589", "-86.8698")
    };
  }

  render() {
    return (
      <div className="App">
          {this.state.restaurants.data.map((restaurant, idx) => {
              return (<Restaurant key={idx} restaurant={restaurant}/>);
          })}
      </div>
    );
  }
}

export default App;
