import React, { Component } from 'react';
import Hero from '../Hero/Hero';

export default class Home extends Component {
  render() {
    return (
      <Hero
        title='Best tours in Paris you can find here!'
        subTitle='Use the button to find out more'
        button='See all tours'
        LinkTo='/tour-list'
      />
    );
  }
}
