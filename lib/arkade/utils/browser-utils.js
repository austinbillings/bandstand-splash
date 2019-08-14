import Fingerprint from 'fingerprintjs2';
import { browserHistory } from 'react-router-dom';

import { isString } from 'arkade/utils/type-utils';
import { getFromStorage, saveToStorage } from 'arkade/utils/storage-utils';


export function getFingerprint () {
  const existingFingerprint = getFromStorage('fingerprint');

  return new Promise((resolve, reject) => {
    if (existingFingerprint) resolve(existingFingerprint);

    new Fingerprint().get(resolve, reject);
  });
};

export function navigateToUrl (url, history) {
  if (!isString(url))
    throw new TypeError(`${url} is not a <String>.`);

  return history
    ? history.push(url)
    : window.history.pushState('', '', url);
}

export function refreshPage () {
  return loadUrl(window.location.href);
}

export function loadUrl (url) {
  if (!isString(url))
    throw new TypeError(`${url} is not a <String>.`);

  return window.location.href = url;
}

export function setPageTitle (title) {
  if (!isString(title))
    throw new TypeError(`${title} is not a <String>`);

  return document.title = title;
}

export function removeCookie (cookieName) {
  if (!isString(cookieName))
    throw new TypeError(`${cookieName} is not a <String>`);

  document.cookie = cookieName + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
