import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ListCv from './ListCv';
import './components.scss';
import experience from '../assets/data/experience.json';

export default class Experience extends React.Component {

  constructor(){
    super();
    this.state = {
      display:'',
      currentItem: {},
      active: (-1)
    }
  }

  onDetail(index){
    const newState = this.state.display == 'showDetail' ? '' : 'showDetail';
    const activeState = this.state.display == 'showDetail' ? '8' : index;
    this.setState({
      display : newState,
      currentItem: experience.list[index],
      active: activeState
    });
  }

  renderList(){
    const elems = [];
    experience.list.map((item, index) => {
      elems.push(
        <ListCv key={'cv' + index}
        className={'cv' + index + ' ' + (this.state.active === index ? 'active' : '')}
        item={item}
        active={(this.state.active === index ? 'active' : '')}
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
