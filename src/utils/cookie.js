// src/utils/cookie.js
import Cookies from 'js-cookie';

// Set a cookie
export const setCookie = (key, value, days = 7) => {
  Cookies.set(key, value, {
    expires: days,
    secure: true,
    sameSite: 'strict',
  });
};

// Get a cookie
export const getCookie = (key) => Cookies.get(key);

// Remove a cookie
export const removeCookie = (key) => Cookies.remove(key);
