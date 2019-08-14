import { isString, isNonEmptyString } from 'arkade/utils/type-utils';

export function trim (value) {
  return isString(value) ? value.trim() : value;
}

export function splitBy (value, splitByChar = '') {
  return !isString(value)
    ? value
    : value
      .split(splitByChar)
      .map(trim)
      .filter(isNonEmptyString);
}

export function prettyPrint (content, singleLine = false) {
  const json = JSON.stringify(content, null, '  ');

  return singleLine
    ? splitBy(json, '\n').join('  ')
    : json;
}

export function lcFirst (text) {
  return text && text.length
    ? text[0].toLowerCase() + text.substring(1)
    : text;
}

export function ucFirst (text) {
  return text && text.length
    ? text[0].toUpperCase() + text.substring(1)
    : text;
}

export function forceCamelCase (value) {
  if (!isString(value))
    return value;

  return splitBy(value, '-')
    .map((str, i) => !i ? lcFirst(str) : ucFirst(str))
    .join('');
}

export function createActionPrefix (setName) {
  return (text) => `${setName} :: ${text}`;
}
