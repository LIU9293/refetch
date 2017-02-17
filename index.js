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
  return Promise.race([
      timeout(milliseconds),
      fetch(url, options)
  ]);
}

const retry = (url, options, milliseconds, retryTimes) => { 
  return fetchWithTimeout(url, options, milliseconds).catch(e => {
    if(retryTimes === 1){
      return Promise.reject('timeout');
    } else {
      if(e === 'timeout'){
        console.log(`there is ${retryTimes - 1} times retry left`);
        return retry(url, options, milliseconds, retryTimes - 1);
      } else {
        return Promise.reject(e)
      }
    }
  });
}

module.exports = retry