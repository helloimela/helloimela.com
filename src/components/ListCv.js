import React from 'react';

import './components.scss';

export default class ListCv extends React.Component {

  constructor(){
    super();
  }

  render(){
    return [
      <div key='col-2' className={'circle-cv ' + this.props.className} onClick={this.props.onDetail}>
        <h5 className='job-year'><span>{this.props.item.year}</span></h5>
        <div className='circle-text'>
          <h5>{this.props.item.title}</h5>
          <p>at {this.props.item.company}</p>
        </div> 
        <div className={'cv-detail ' + this.props.active}>
          <p className='lead'>{this.props.item.description}</p>
          <p className='keywords'>Keywords: {this.props.item.keywords}</p>
        </div>
      </div>
    ];
  }
}
