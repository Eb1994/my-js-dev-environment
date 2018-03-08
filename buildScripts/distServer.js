import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
//Create instance of express server
const app = express();

app.use(compression());
app.use(express.static('dist'));


//read from file where to load up first page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//http request for data
app.get('/users', function(req, res) {
  //Hard coding for simplicity. Pretend this hits a real database i.e. we create json object below!
  res.json([
    {
      "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"
    },
    {
      "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com"
    },
    {
      "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com"
    }
  ]);
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
