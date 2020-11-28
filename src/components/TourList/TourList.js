import React, { Component } from 'react';
//import 'TourList.scss';
import { tourData } from '../../Data';
import Tour from '../Tour/Tour';
export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    const sortedTours = this.state.tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    return (
      <section>
        {this.state.tours.map((tour) => (
          <Tour info={tour} key={tour.id} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
