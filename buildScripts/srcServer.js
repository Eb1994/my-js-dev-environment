import express from 'express';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */
//From bundling tutorial later
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
//Create instance of express server
const app = express();

//From bundling tutorial later
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//read from file where to load up first page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
