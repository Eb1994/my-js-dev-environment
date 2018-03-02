import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
//Create instance of express server
const app = express();

//read from file where to load up first page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

//Listen and connect and handel error if not able to connect
app.listen(port, function(err) {
  if(err) {
    console.log('ERROR CONNECTING! = ' + err);
  }
  else {
    open('http://localhost:' + port);
  }
});
