import React, { Component } from 'react';

import Icon from 'arkade/components/icon';

import './modal-body.scss';

class ModalBody extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { title, closeable, escapable, children, onClose, className } = this.props;

    return (
      <div className={`${className || ''} modal-body`}>
        {(title || closeable) && (
          <div className="modal-top">
            {title && <h4 className="header-small">{title}</h4>}
            <span> </span>
            {closeable && <Icon fa="close" onClick={onClose}/>}
          </div>
        )}
        {children && (
          <div className="modal-content">
              {children}
          </div>
        )}
      </div>
    )
  }
};

ModalBody.defaultProps = {
  title: null,
  closeable: true,
  escapable: true,
  onClose: () => null
};

export default ModalBody;
