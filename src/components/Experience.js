import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ListCv from './ListCv';
import './components.scss';
import experience from '../assets/data/experience.json'

export default class Experience extends React.Component {

  constructor(){
    super();
    this.state = {
      display:'',
      active:(-1)
    }
  }

  onDetail(index){
    const newState = 'showDetail';
    this.setState({
      display : newState,
      active: index
    });
  }

  renderList(){
    const elems = [];
    experience.list.map((item, index) => {
      elems.push(
        <ListCv key={'cv' + index}
        className={'cv' + index + ' ' + (this.state.active === index ? 'active' : '')}
        year={item.year}
        title={item.title}
        company={item.company}
        description={item.description}
        keywords={item.keywords}
        onDetail={this.onDetail.bind(this, index)}/>
      )
    })

    return [...elems]
  }

  render() {
    return (
      <div id='experience' className='full-container experience-container'>
        <Container fluid='true'>
          <Row className="justify-content-md-center">
            <Col md={{ span: 6, offset: 4 }} className='title'>
              <h3 className='display xl italic'>Experience</h3>
            </Col>
            <Col md={12} className={'cvs ' + this.state.display}>
              {this.renderList()}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
