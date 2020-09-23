import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GlyphAnimated from './decorations/GlyphAnimated';

import './components.scss';

function Home() {
  return (
    <Container>
      <Row>
        <Col className='display-container' md={{ span: 6, offset: 4 }}>
          <h1 className='display light italic'>Hello, I'm Ela.</h1>
          <h3>I'm a frontend developer.</h3>
          <p className='regular'>I love Javascript, problem solving, and I have a passion for creating a user-friendly solution. I build web applications and creating user interface for almost 6 years. Right now I am based in Stockholm, Sweden.</p>
        </Col>
      </Row>  
      <GlyphAnimated left='5%' id='1'></GlyphAnimated>
      <GlyphAnimated left='13%' id='2'></GlyphAnimated>
      <GlyphAnimated left='21%' id='3'></GlyphAnimated>
      <GlyphAnimated left='29%' id='4'></GlyphAnimated>
    </Container>
  );
}

export default Home;
