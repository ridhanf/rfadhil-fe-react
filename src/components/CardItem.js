import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} target='_blank'>
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
                  <Link
                    to={props.path}
                    target='_blank'
                  >
                    LIVE
                  </Link>
                </Col>
                <Col>
                  <Link
                    to={props.source}
                    target='_blank'
                  >
                    Source
                  </Link>
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
