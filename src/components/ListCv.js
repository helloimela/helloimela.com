import React from 'react';
import { Col } from 'react-bootstrap';

import './components.scss';

function ListCv(props) {
  return [
    <Col key='col-1' md={4} className='year'>
      <h5>{props.year}</h5>
    </Col>,
    <Col key='col-2' md={8} className='description'>
      <h5><span className='job-title'>{props.title}</span> at {props.company}</h5>
      <p>{props.description}</p>
      <p class='italic keywords'>{props.keywords}</p>
    </Col>
  ];
}

export default ListCv;
