import retryFetch from '../index.js';

retryFetch('http://localhost:3030/try/4', {}, 1000, 5, (n) => {
  console.log(`this is the ${5 - n} try and timeout...`);
})
  .then(res => res.text())
  .then(text => {
    console.log(text);
  })
  .catch(err => {
    console.log(`fetch err, the error message is: ${err}`);
  });
