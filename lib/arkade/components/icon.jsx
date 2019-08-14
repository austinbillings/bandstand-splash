import React from 'react';

export const ImageIcon = ({ image, onClick, className, name, style = {}, ...rest }) => (
  <img
    src={image}
    onClick={onClick}
    alt={name || 'Icon'}
    className={`icon icon-image ${className || ''}`}
    style={{ height: '1em', ...style }}
    {...rest}
  />
);

export const FontAwesomeIcon = ({ fa, onClick, className, style, ...rest }) => (
  <i
    style={style}
    onClick={onClick}
    className={`icon icon-fa fa fa-${fa} ${className || ''}`}
    {...rest}
  />
);

const Icon = ({ fa, image, ...rest }) => (
  fa
    ? <FontAwesomeIcon fa={fa} {...rest}/>
    : <ImageIcon image={image} {...rest}/>
);

export default Icon;
