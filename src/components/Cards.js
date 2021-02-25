import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Card() {
  return (
    <div className='cards' id='portfolios'>
      <h1>Check out these EPIC Portfolios!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/project-1.png'
              text='Landing page with paper rock scissors game and CRUD Dashboard'
              label='HTML CSS Bootstrap NodeJS Express PostgreSQL Sequelize'
              path='/services'
              live='https://binar-challenge.herokuapp.com/'
              source='https://github.com/ridhanf/binar-portfolio/'
            />
            <CardItem
              src='images/project-2.png'
              text='Simple CRUD app using Node and Sequelize ORM.'
              label='NodeJS Express PostgreSQL Sequelize'
              path='/services'
              live='https://fadhil-node-crud.herokuapp.com/articles'
              source='https://github.com/ridhanf/node-sequelize-CRUD/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card;
