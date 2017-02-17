# refetch

refetch let you simply add `timeout` and `retry` method to your fetch API

<div style="align: center">
  <img src="./test/test.gif" alt="gif" />
</div>

### Install

```shell
 npm install re-fetch --save
```

### Usage
The url and options are totally same as fetch.

```javascript
  import refetch from 're-fetch';

  //timeout is milliseconds like: 3000
  refetch(url, options, timeout, retryTimes, cb)
    .then(res => { /* ... */})
    .catch(err => {
      if(err === 'timeout'){
        /* ... */
      } else {
        /* ... */
      }
    });
```
