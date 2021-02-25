import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img 
              className='cards__item__img'
              alt='Travel' 
              src={props.src}
              />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <Container>
              <Row>
                <Col>
                  <a href={props.live}>LIVE</a>
                </Col>
                <Col>
                  <a href={props.source}>SOURCE</a>
                </Col>
              </Row>
            </Container>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem;
