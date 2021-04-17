import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

import Portfolio from './Portfolio';
import Footer from './Footer';
import projects from '../assets/data/projects.json';

import './components.scss';

export default class Work extends React.Component {

  renderList(){
    const elems = [];
    projects.items.map((item, index) => {
      elems.push(
          <Portfolio key={'project-' + index}
          className={'project-' + index}
          item={item}/>
      )
    })

    return [...elems]
  }

  render() {
    return (
      <div id='projects' className='full-container work-container'>
        <style type="text/css">
          {`
          .card, .card-header{
            background: transparent;
            border: 0;
          }
          .card-header{
            background: var(--light);
            color: var(--secondary);
            cursor: pointer;
          }
          .accordion > .card,
          .accordion > .card:not(:last-of-type),
          .accordion > .card:not(:first-of-type) 
          {
            border-bottom: 1px solid #ffcad5;
          }
          .collapse.show .card-body{
            border-top: 1px solid #ffcad5;
          }
          .card-body{
            background: #fdfdfc;
          }
          `}
        </style>
        <Container>
          <Row className="justify-content-md-center align-items-center">
            <Col sm='12' md='10' lg='8' className='title'>
              <h3 className='display italic'>Selected Projects</h3>
            </Col>

            <Col sm='12' md='10' lg='8' key='accordion'>
              <Accordion>
              {this.renderList()}
              </Accordion>
            </Col>

          </Row>
          <Row>
            <Footer/>
          </Row>
        </Container>
      </div>
    )
  }
}