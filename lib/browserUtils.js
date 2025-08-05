// Utility functions for browser/client-side operations

export const isClient = () => typeof window !== 'undefined';

export const getPathname = () => {
  if (isClient()) {
    return window.location.pathname;
  }
  return '';
};

export const addScrollListener = (callback) => {
  if (isClient()) {
    window.addEventListener('scroll', callback);
  }
};

export const removeScrollListener = (callback) => {
  if (isClient()) {
    window.removeEventListener('scroll', callback);
  }
};

export const getLocalStorageItem = (key) => {
  if (isClient()) {
    return localStorage.getItem(key);
  }
  return null;
};

export const setLocalStorageItem = (key, value) => {
  if (isClient()) {
    localStorage.setItem(key, value);
  }
};