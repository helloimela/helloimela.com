import React from 'react';

import './components.scss';

function Profile() {
  return (
    <div className='profile'>
      <span className='display'>helloimela.com</span>
      <div className='social'>
        <a href='https://github.com/helloimela/' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
        <a href='http://instagram.com/memory_sthlm' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a>
        <a href='https://se.linkedin.com/in/elayudhanira' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
        <a href='mailto: hello@helloimela.com' target='_blank' rel='noopener noreferrer'><i className='fas fa-envelope'></i></a>
      </div>
    </div>
  );
}

export default Profile;
