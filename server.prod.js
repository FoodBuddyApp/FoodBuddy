const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.production');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response) {
   response.sendFile(__dirname + '/index.html');
 });


app.use(function(req, res) {
   res.header("Content-Type", "application/javascript");
})

new WebpackDevServer(webpack(config), {
   publicPath: config.output.publicPath,
   hot: true,
   historyApiFallback: true
 }).listen(process.env.PORT || 5000, 'localhost', (err) => {
   if (err) {
     console.log(err);
   }
   console.log('Listening at localhost:5000');
 });