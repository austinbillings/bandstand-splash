import moment from 'moment';

export const END_OF_TIME = '9999-12-31T23:59:59Z';

import { isNumber } from 'arkade/utils/type-utils';

export const formatShortDate = (date) => {
  return moment(date).format('M/DD/YY');
};

export const formatRelativeDate = (date) => {
  return moment(date).fromNow();
};

export const getCurrentTimestamp = () => {
  return (new Date()).getTime();
}

export const getEncodedCurrentTimestamp = () => {
  return btoa(getCurrentTimestamp());
}

export const getFullTimestamp = () => {
  return moment().format();
}

export const getTimeSince = (timestamp) => {
  if (!isNumber(timestamp))
    throw new TypeError(`${timestamp} is not a number.`);

  return getCurrentTimestamp() - timestamp;
}

export const formatDateWithRelative = (date) => {
  return `${formatShortDate(date)}  (${formatRelativeDate(date)})`;
};
