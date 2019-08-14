import React from 'react'
import { createPortal } from 'react-dom';

class Portal extends React.Component {
  render () {
    const { children } = this.props;
    const rootTarget = document.getElementById('modal-root');

    return createPortal(children, rootTarget);
  }
};

export default Portal;
