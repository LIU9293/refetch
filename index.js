'use strict'
require('whatwg-fetch');

const timeout = (milliseconds) => {
  return new Promise((resolve, reject) => {
    try{
      setTimeout(() => {
        reject('timeout');
      }, milliseconds);
    } catch(e) {
      reject(e);
    }
  });
}

const fetchWithTimeout = (url, options, milliseconds) => {
  if(!milliseconds){
    milliseconds = 5000;
  }
  return Promise.race([
      timeout(milliseconds),
      fetch(url, options)
  ]);
}

const refetch = (url, options, milliseconds, retryTimes, cb) => {
  return fetchWithTimeout(url, options, milliseconds).catch(e => {
    if(!retryTimes){
      return Promise.reject(e);
    }
    if(retryTimes === 1){
      return Promise.reject('timeout');
    } else {
      if(e === 'timeout'){
        if(cb){
          cb(retryTimes - 1);
        }
        return refetch(url, options, milliseconds, retryTimes - 1, cb || null);
      } else {
        return Promise.reject(e)
      }
    }
  });
}

module.exports = refetch
