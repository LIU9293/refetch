'use strict';
const express = require('express');
const port = process.env.PORT || 3030;
const app = express();
let tryTime = 1;
//CORS
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

//always return index.html
app.get('/try/:time', (req, res) => {
  let time = parseInt(req.params.time);
  if(tryTime === 1){
    console.log('the server will response at the ', time, 'th times');
  }
  if(tryTime === time){
    console.log(`${tryTime} try: success`);
    tryTime = 1;
    res.send('success');
  } else {
    console.log(`${tryTime} try: no response`);
    tryTime++;
    return;
  }
});

app.listen(port);

console.log("server started on port " + port);
