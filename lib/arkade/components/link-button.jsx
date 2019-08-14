import React from 'react';

class LinkButton extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { href, className, onClick, linkClassName, children, replace, kind } = this.props;

    const isExternalLink = typeof href === 'string' && href.indexOf('http') === 0;
    const clickHandler = evt => (typeof onClick === 'function' ? onClick(evt) : null);
    const target = (isExternalLink && !replace) ? '_blank' : '_self';
    const rel = isExternalLink ? 'external noopener noreferrer nofollow' : '';
    const isLinkButton = isExternalLink || cli

    const linkProps = {
      rel,
      target,
      href: href || '#',
      className: 'link-button ' + (linkClassName || '')
    };

    const buttonProps = {
      className: (kind ? `btn btn-${kind} ` : '') + (className || ''),
      onClick: clickHandler,
      children
    };

    return (
      <a {...linkProps}>
        <button {...buttonProps} />
      </a>
    );
  }
};

export default LinkButton;
