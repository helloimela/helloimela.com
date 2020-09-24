import React from 'react';
import { Col } from 'react-bootstrap';

import './components.scss';
import droplet from '../assets/droplet.jpg';

function Portfolio() {
  return (
    <Col md='6' className='portfolio'>
      <div className='thumbnail'>
        <img src= {droplet} alt='Droplet project'/>
      </div>
      <div className='description'>
        <h5>Judul</h5>
        <p>Almost before we knew it, we had left the ground.</p>
        <p><a href=''><i className='fab fa-github'></i></a></p>
        <p><a href=''><i className='fas fa-external-link-square-alt'></i></a></p>
      </div>
    </Col>
  );
}

export default Portfolio;
