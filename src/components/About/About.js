import React, { Component } from 'react';
import './About.scss';
import img1 from '../../img/image1.jpg';

export default class About extends Component {
  render() {
    return (
      <section className='about'>
        <h1 className='about__header'>About us</h1>
        <img className='about__img' src={img1} alt='paris' />
        <p className='about__text'>
          Paris, France's capital, is a major European city and a global center
          for art, fashion, gastronomy and culture. Its 19th-century cityscape
          is crisscrossed by wide boulevards and the River Seine. Beyond such
          landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame
          cathedral, the city is known for its cafe culture and designer
          boutiques along the Rue du Faubourg Saint-Honoré.
        </p>
        <br />
        <p className='about__text--2'>
          Paris is the capital city of France. The French historic, political
          and economic capital, with a population of only 2.5 million is located
          in the northern part of France. One of the most beautiful cities in
          the world. Home to historical monuments such as Notre Dame, the Eiffel
          tower (320m), Bastille, Louvre and many more. Much of the city was
          re-designed by Haussmann in the 19th century. Paris has a population
          of more than 2.5 million people, and the city is divided into 20
          "arrondissements" (districts) which are numbered 1 to 20. The river
          Seine divides the city into the Rive Gauche on the south and the Rive
          Droite on the north banks of the river. The river is still very busy
          with commercial barges transporting cargo in and out, there is also
          much The historical name for the city is Parisii and given by the
          Gauls, however the Romans arrived in 52 B.C. and changed the name to
          Lutetia
        </p>
      </section>
    );
  }
}
