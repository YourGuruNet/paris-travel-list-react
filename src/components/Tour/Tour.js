import React, { Component } from 'react';
import './Tour.scss';
export default class Tour extends Component {
  state = {
    showLocation: false,
  };

  showLocation = () => {
    this.setState({
      showLocation: !this.state.showLocation,
    });
  };

  render() {
    const { id, name, img, info, price, location } = this.props.info;
    const { removeTour } = this.props;

    const checkLocation = (showLocation) => {
      if (showLocation === true) {
        return (
          <div className='location__container'>
            <iframe
              title={name}
              className='location__container__map'
              src={location}></iframe>
          </div>
        );
      } else {
        return null;
      }
    };

    return (
      <div className='tour'>
        <button className='tour__button' onClick={() => removeTour(id)}>
          &#10005;
        </button>
        <img className='tour__img' src={img} alt={name} />
        <div className='tour__content'>
          <h3 className='tour__name'>{name}</h3>
          <p className='tour__info'>{info}</p>
          <p className='tour__price'>&euro;{price}</p>
          <button className='tour__location' onClick={this.showLocation}>
            See location &#8628;
          </button>
        </div>
        {checkLocation(this.state.showLocation)}
      </div>
    );
  }
}
