import { getFingerprint } from 'arkade/utils/browser-utils';

export const getDeviceTokenRequestData = () => {
  const { userAgent } = navigator;

  return new Promise((resolve, reject) => {
    const done = fingerprint => resolve({ fingerprint, userAgent });

    getFingerprint()
      .then(done, reject);
  });
};

export const getTokensFromResponse = (response = {}) => {
  const { data, status } = response;

  if (status !== 200)
    return {};

  const {
    id_token: idToken,
    access_token: accessToken,
    refresh_token: refreshToken
  } = response && response.data ? response.data : {};

  return { idToken, accessToken, refreshToken };
};
