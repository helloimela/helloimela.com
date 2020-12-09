import React from 'react';
import { Col } from 'react-bootstrap';

import './components.scss';

export default class Portfolio extends React.Component {

  constructor(){
    super();
  }

  render() {
    return (
      <Col sm='12' md='12' lg='6' className='portfolio'>
        <div className='thumbnail'>
          <img src={this.props.item.image} alt={this.props.item.title}/>
        </div>
        <div className='description'>
          <h5>{this.props.item.title}</h5>
          <p>{this.props.item.description}</p>
          <p className='link'>
          {this.props.item.gh &&
            <a href={this.props.item.gh} target='_blank'><i className='fab fa-github'></i></a>
          }
          {this.props.item.link &&
            <a href={this.props.item.link} target='_blank'><i className='fas fa-external-link-square-alt'></i></a>
          }
          </p>
        </div>
      </Col>
    );
  }
  
}
