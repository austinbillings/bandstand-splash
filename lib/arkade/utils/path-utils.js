import { isObject, isDefined } from 'arkade/utils/type-utils';

export function stripLeadingSlash (urlValue) {
  return (typeof urlValue === 'string' && urlValue.indexOf('/') === 0)
    ? urlValue.replace('/', '')
    : urlValue;
};

export function safeEncode (...rawValues) {
  return rawValues.map(rawValue => {
    const sanitized = rawValue.toString().split('.').join('·');
    const result = encodeURIComponent(sanitized);

    return result;
  }).join('/');
}

export function safeDecode (encodedValue) {
  const decoded = decodeURIComponent(encodedValue);
  const result = decoded.split('·').join('.');

  return result;
}

export function buildQueryString (queryObject, serializeUndefined) {
  return !isObject(queryObject)
    ? encodeURIComponent(queryObject)
    : Object.entries(queryObject)
        .reduce((output, entry, index) => {
          const [key, value] = entry;
          const segment = (index ? '&' : '')
            + key.toString()
            + (isDefined(value) || serializeUndefined
              ? '=' + encodeURIComponent(value)
              : ''
            );

          return output += segment;
        }, '?');
};
