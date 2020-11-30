import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

export default function Hero({ title, button, LinkTo, subTitle }) {
  return (
    <section className='hero'>
      <div className='hero__banner'>
        <h1 className='hero__banner__title'>{title}</h1>
        <h2 className='hero__banner__sub--title'>{subTitle}</h2>
        <Link to={LinkTo} className='hero__banner__button'>
          {button}
        </Link>
      </div>
    </section>
  );
}
