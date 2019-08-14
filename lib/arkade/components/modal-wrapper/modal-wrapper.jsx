import React from 'react';
import { createPortal } from 'react-dom';

import './modal-wrapper.scss';
import Portal from 'arkade/components/portal';

const ModalWrapper = ({ children, style, className, visible } = {}) => {
  
};

class ModalWrapper extends React.Component {
  render () {
    const  = this.props;
    const fullClassName = 'modal-wrapper '
      + (className ? className : '')
      + (visible ? 'visible' : 'hidden');

    return (
      <Portal>
        <div className={fullClassName}>
          <div className="modal-wrapper-inner" style={style} children={children}/>
        </div>
      </Portal>
    );
  }
};

export default ModalWrapper;
