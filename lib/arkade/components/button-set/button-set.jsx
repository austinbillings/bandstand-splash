import React, { Component } from 'react';

import './button-set.scss';
import LinkButton from 'arkade/components/link-button';

class ButtonSet extends Component {
  render () {
    const { buttons, className = '', style } = this.props;

    return (
      <div className={'button-set ' + className} style={style}>
        {buttons.map((button, idx) => (
          <LinkButton key={idx} {...button}>
            {button.text}
          </LinkButton>
        ))}
      </div>
    );
  }
};

export default ButtonSet;
