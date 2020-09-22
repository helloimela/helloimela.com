import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './components.scss';

const createRain = () => {
  let rains = [];

  for(let i=0;i<10;i++) {
    rains = [...rains, <i key={i} className='rain'></i>]
  }

  return [...rains];
}

function Home() {
  return (
    <Container>
      {createRain()}
      <Row>
        <Col className='display-container' md={{ span: 6, offset: 4 }}>
          <h1 className='display light italic'>Hello, I'm Ela.</h1>
          <h3>I'm a frontend developer.</h3>
          <p className='light'>I love Javascript and I have a passion for creating user-friendly solutions. I build web applications and creating user interface for almost 6 years. Right now I am based in Stockholm, Sweden.</p>
        </Col>
      </Row>  
      
    </Container>
  );
}

export default Home;
