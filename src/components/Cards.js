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
              text='Landing Page with Rock Paper Scissors Game and CRUD Dashboard'
              label='HTML CSS Bootstrap'
              path='//binar-challenge.herokuapp.com/'
              source='//github.com/ridhanf/binar-portfolio/'
            />
            <CardItem
              src='images/project-2.png'
              text='Simple CRUD App for Articles Management'
              label='NodeJS Express PostgreSQL Sequelize'
              path='//fadhil-node-crud.herokuapp.com/articles'
              source='//github.com/ridhanf/node-sequelize-CRUD/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/project-3.png'
              text='Simple Rock Paper Scissors Game'
              label='HTML CSS JavaScript'
              path='//binar-challenge.herokuapp.com/game'
              source='//github.com/ridhanf/binar-portfolio/'
            />
            <CardItem
              src='images/project-4.png'
              text='Simple CRUD Dashboard for Users Management'
              label='NodeJS Express PostgreSQL Sequelize'
              path='//binar-challenge.herokuapp.com/dashboard'
              source='//github.com/ridhanf/binar-portfolio/'
            />
          </ul>
          {/* <ul className='cards__items'>
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
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default Card;
