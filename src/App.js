import React, { Component } from 'react';
import './App.css';
import TripAdvisorService from './service/trip_advisor_service';
import Slider from 'react-slick';

import Restaurant from './components/Restaurant';

class App extends Component {
  constructor(props) {
    super(props);

    const service = new TripAdvisorService();

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);

    this.state = {
      restaurants: service.findRestaurants("35.7345", "-86.9117", "35.8589", "-86.8698")
    };
  }

  previous() {
    this.sliderRef.slickPrev();
  }

  next() {
    this.sliderRef.slickNext();
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      swipe: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="App">
        <Slider ref={c => (this.sliderRef = c)} {...settings}>
          {this.state.restaurants.data.map((restaurant, idx) => {
              return (<Restaurant key={idx} restaurant={restaurant}/>);
          })}
        </Slider>
        <button onClick={this.previous}>Thumbs Down</button>
        <button onClick={this.next}>Thumbs Up</button>
      </div>
    );
  }
}

export default App;
