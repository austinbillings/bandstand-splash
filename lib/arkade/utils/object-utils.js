import { splitBy } from 'arkade/utils/text-utils';
import { isObject, isArray, isPrimitive, isRegex, isFunction, isDefined, isNonEmptyString } from 'arkade/utils/type-utils';

export function getKeys (object) {
  if (!isObject(object))
    throw new TypeError(`${object} is not an <Object>`);

  return Object.keys(object);
}

export function getDeep (object, path, pathSeparator = '.') {
  if (!isObject(object))
    throw new TypeError(`${object} is not an <Object>`);
  if (!isNonEmptyString(path))
    throw new TypeError(`${path} is not a non-empty <String>`);
  if (!isNonEmptyString(pathSeparator))
    throw new TypeError(`${pathSeparator} is not a non-empty <String>`);

  let lookupPath = splitBy(path, pathSeparator);
  let outputValue = Object.assign({}, object);

  while (lookupPath.length) {
    let currentPathSegment = lookupPath.shift();

    if (isObject(outputValue) || isArray(outputValue)) {
      let nextValue = outputValue[currentPathSegment];

      if (!isDefined(nextValue))
        return undefined;

      outputValue = nextValue;
    }
  }

  return outputValue;
}

export function mergeDeep (...objects) {
  return objects.reduce((output, item) => {
    getKeys(item).forEach(key => {
      if (!isDefined(item[key]))
        return;

      output[key] = isObject(output[key]) && isObject(item[key])
        ? mergeDeep(output[key], item[key])
        : item[key];
    });

    return output;
  }, {});
}

export function equals (a, b) {
  if (typeof a !== typeof b) return false;
  if (isPrimitive(a)) return a === b;
  if (isRegex(a)) return isRegex(b) ? a.toString() === b.toString() : false;

  return JSON.stringify(a) === JSON.stringify(b);
}

export function unique (array) {
  if (!isArray(array))
    throw new TypeError(`unique: ${array} is not an array.`);

  return array.reduce((output, item) => {
    const found = output.find(i => equals(i, item));

    return found
      ? output
      : [ ...output, item ]
  }, []);
}

export const createSorter = (getValue) => (a, b) => {
  if (!isFunction(getValue)) return 0;

  const valueA = getValue(a);
  const valueB = getValue(b);

  return valueA === valueB
    ? 0
    : valueA < valueB
      ? -1
      : 1;
};
