# refetch

refetch let you simply add `timeout` and `retry` method to your fetch API

<div style="align: center">
  <img src="./test/test.gif" alt="gif" />
</div>

### Install
    `shell
    npm install refetch
    `

### Usage
The url and options are totally same as fetch.
    `javascript

      import refetch from 'refetch';

      //timeout is milliseconds like: 3000
      retryFetch(url, options, timeout, retryTimes, cb)
        .then(res => { /* ... */})
        .catch(err => {
          if(err === 'timeout'){
            /* ... */
          } else {
            /* ... */
          }
        });
    `
