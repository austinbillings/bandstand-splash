export const testPatterns = {
  otp: /^[0-9]{4}-?[0-9]{4}$/,
  otpStrict: /^[0-9]{8}$/,
  name: /^[a-zA-Z-. ]{1,256}$/,
  username: /^[0-9a-zA-Z-_]{1,256}$/,
  email: /^[^\s@,#$%()]+@[^\s@]+\.[^\s@]+$/,
  password: /^[a-zA-Z0-9!@#`~%^&?_-]{6,256}$/
};

export const isValidName = (name = '') => {
  if (typeof name !== 'string' || !name.length) return false;

  return testPatterns.name.test(name);
};

export const isValidUsername = (username = '') => {
  if (typeof username !== 'string' || !username.length) return false;

  return testPatterns.username.test(username);
};

export const isValidEmail = (email = '') => {
  if (typeof email !== 'string' || !email.length) return false;

  return testPatterns.email.test(email);
};

export const isValidPassword = (password = '') => {
  if (typeof password !== 'string' || !password.length) return false;

  return testPatterns.password.test(password);
};

export const isValidOtp = (otpCode = '') => {
  if (typeof otpCode === 'number')
    otpCode = otpCode.toString();
  if (typeof otpCode !== 'string')
    return false;

  return otpCode.length === 8
    && testPatterns.otpStrict.test(otpCode);
}

export const isValidNumber = (number) => {
  return typeof number === 'number'
    || typeof number === 'string'
    && (number * 1).toString() === number;
}

export const isValid = (value = '', type) => {
  if (!type) return false;
  if (typeof type === 'function') return type(value);

  switch (type.toLowerCase()) {
    case 'name':
      return isValidName(value);
    case 'username':
      return isValidUsername(value);
    case 'password':
      return isValidPassword(value);
    case 'optionalnumber':
      return value === null || isValidNumber(value);
    case 'number':
      return isValidNumber(value);
    case 'email':
      return isValidEmail(value);
    case 'otp':
      return isValidOtp(value);
    default:
      return true;
  };
};

export const areFieldsValid = (field) => {
  if (Array.isArray(field))
    return field.every(areFieldsValid);

  const { value, validate } = field;

  return isValid(value, validate);
}
