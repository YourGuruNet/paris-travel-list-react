import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

export default class Error extends Component {
  render() {
    return (
      <section className='error'>
        <h1 className='error__header'>Sorry this page does not exist</h1>
        <Link to='/' className='error__btn'>
          Go back to home
        </Link>
      </section>
    );
  }
}
