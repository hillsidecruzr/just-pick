import React, { Component } from 'react';
import './App.css';
import TripAdvisorService from './service/trip_advisor_service';

class App extends Component {
  async render() {
    const service = new TripAdvisorService();
    const response = await service.findRestaurants("35.7345", "-86.9117", "35.8589", "-86.8698");
    console.log(response.body);
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
