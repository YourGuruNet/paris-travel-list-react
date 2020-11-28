import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  mobileNavigationOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <nav className='navbar'>
        <h3 className='navbar__logo'>
          ParisTour<span>.com</span>
        </h3>
        <button
          onClick={this.mobileNavigationOpen}
          className='navbar__mobile__icon'>
          <span
            className={
              this.state.isOpen
                ? 'navbar__mobile__icon--close'
                : 'navbar__mobile__icon--open'
            }>
            &nbsp;
          </span>
        </button>
        <ul
          className={
            this.state.isOpen
              ? 'navbar__menu show-nav'
              : 'navbar__menu hide-nav'
          }>
          <li className='navbar__menu--links'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navbar__menu--links'>
            <Link to='/tour-list'>Tours</Link>
          </li>
          <li className='navbar__menu--links'>
            <Link to='/about'>About us</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
