import React from 'react';
import { Col } from 'react-bootstrap';

import './components.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <Col sm={12} className='footer'>
        &copy; Ela Yudhanira, 2020. Made with love by helloimela.
      </Col>
    )
  }
}
