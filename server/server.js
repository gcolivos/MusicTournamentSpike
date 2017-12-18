// Require express - gives us a function
var express = require('express');

// Create an instance of express by calling the function retured above - gives us an object
var app = express();
var port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// Start up our server
app.listen(port, function(){
  console.log('listening on port', port);
});

var SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});

spotifyApi.setAccessToken('<your_access_token>');
