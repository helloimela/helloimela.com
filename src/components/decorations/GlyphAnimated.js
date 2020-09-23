import React from 'react';

import './GlyphAnimated.scss';

const arrange = () => {
  let glyphs = [];

  const codeIcons = [
    'fas fa-laptop-code',
    'fas fa-bug',
    'fab fa-html5',
    'fas fa-code',
    'fab fa-js-square',
    'fas fa-code-branch',
    'fas fa-terminal',
    'fas fa-save',
    'fab fa-css3',
    'far fa-keyboard'
  ];
  
  let iconName;

  while(codeIcons.length !== 0){
    let randomIndex = Math.floor(Math.random() * codeIcons.length);
    iconName = <i key={'icon-' + glyphs.length} className={codeIcons[randomIndex]}></i>;
    glyphs = [...glyphs, iconName];
    codeIcons.splice(randomIndex, 1);
  }

  return [...glyphs]
}

function GlyphAnimated(props) {
  const top = Math.random() * 10;
  const style = {
    left: props.left,
    top: top + '%'
  }

  return (
    <div className={'glyph glyph-' + props.id} style={style}>
      {arrange()}
    </div>
  );
}

export default GlyphAnimated;
