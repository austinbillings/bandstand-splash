import { splitBy } from 'arkade/utils/text-utils';
import { isNonEmptyString, isObject } from 'arkade/utils/type-utils';

export const truncateEmail = (email, nameLength = 25) => {
  const [ name, domain ] = email.split('@');
  const truncatedName = name.length <= nameLength
    ? name
    : name.substr(0, nameLength - 3) + '...';

  return `${truncatedName}@${domain}`;
};

export const formatPhone = (phone) => {
  return !isNonEmptyString(phone) || !phone.indexOf('!-') || phone.length !== 10
    ? null
    : `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}–${phone.substring(6)}`;
};

export const formatAddress = (address) => {
  if (!isObject(address))
    return address;

  const join = (...parts) => parts.filter(isNonEmptyString).join(' ');

  return join(
    address.addressLine1,
    address.addressLine2,
    address.cityName,
    address.stateCode,
    address.zipCode,
    address.zipCodeSuffix
  );
}
