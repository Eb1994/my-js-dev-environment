import express from 'express';
import path from 'path';
import open from 'open';

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

//Listen and connect and handel error if not able to connect
app.listen(port, function(err) {
  if(err) {
    console.log('ERROR CONNECTING! = ' + err);
  }
  else {
    open('http://localhost:' + port);
  }
});
