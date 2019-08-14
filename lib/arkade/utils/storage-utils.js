import { isString } from 'arkade/utils/type-utils';

function serialize (object) {
  return JSON.stringify(object);
}

function deserialize (serialized, fallback) {
  return isString(serialized) && serialized !== 'undefined'
    ? JSON.parse(serialized)
    : fallback
      ? fallback
      : null;
}

const saverFactory = storage => (storageKey, contents) => {
  return storage.setItem(storageKey, serialize(contents));
}

const getterFactory = storage => (storageKey, fallback) => {
  return deserialize(storage.getItem(storageKey), fallback);
}

const removerFactory = storage => storageKey => {
  return storage.removeItem(storageKey);
}

const clearerFactory = storage => () => {
  return storage.clear();
}

export const saveToSession = saverFactory(window.sessionStorage);
export const getFromSession = getterFactory(window.sessionStorage);
export const removeFromSession = removerFactory(window.sessionStorage);
export const clearSession = clearerFactory(window.sessionStorage);

export const saveToStorage = saverFactory(window.localStorage);
export const getFromStorage = getterFactory(window.localStorage);
export const removeFromStorage = removerFactory(window.localStorage);
export const clearStorage = clearerFactory(window.localStorage);
