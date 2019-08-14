import React from 'react';
import { Link as AppLink } from 'react-router-dom';
import { isString, isFunction, isNonEmptyString } from 'arkade/utils/type-utils';

const Link = (props) => {
  const { url, disabled, replace, style } = props;

  const isInert = !isNonEmptyString(url);
  const isExternalLink = !isInert && url.indexOf('http') === 0;
  const target = isExternalLink && !replace
    ? '_blank'
    : '_self';
  const rel = isExternalLink
    ? 'external noopener noreferrer nofollow'
    : '';
  const givenStyle = style ? style : {};
  const disabledStyle = disabled
    ? { opacity: 0.6, pointerEvents: 'none' }
    : {};

  const { children, title, onClick, className } = props;
  const passProps = {
    title,
    onClick,
    children,
    disabled,
    className,
    style: { ...givenStyle, ...disabledStyle }
  };

  return isInert
    ? <a {...passProps}/>
    : isExternalLink
      ? <a rel={rel} href={url} target={target} {...passProps} />
      : <AppLink to={url} {...passProps}/>;
};

export default Link;
