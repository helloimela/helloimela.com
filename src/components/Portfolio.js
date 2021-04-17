import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';

import './components.scss';

export default class Portfolio extends React.Component {

  constructor(){
    super();
  }

  render() {
    return (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={this.props.item.id}>
              {this.props.item.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={this.props.item.id}>
            <Card.Body>
              <div className='link-works'>
                {this.props.item.gh &&
                  <a href={this.props.item.gh} target='_blank'><i className='fab fa-github'></i>Github</a>
                }
                {this.props.item.link &&
                  this.props.item.link.map((text, index) => (
                    <a href={text} target='_blank' key={index + '-linkwork'}>
                      <i className='fas fa-tag'></i>{text}
                    </a>
                  ))
                }
                <span>
                <i className='fas fa-code'></i>{this.props.item.keywords}
                </span>
              </div>
              <h3>Objective</h3>
              <p className="lead">{this.props.item.objective}</p>
              <div>
              {this.props.item.description.map((desc, index) => (
                <p key={`desc-${index}`}>{desc}</p>
              ))}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    );
  }
  
}
