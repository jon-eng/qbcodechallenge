//Libraries
var express    = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var Twitter    = require("twitter");
var ig         = require('instagram-node').instagram();
var request     = require("request");


//Express 
var app = express();
//Middleware 
app.use(logger("dev"));
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

//TWITTER REQUEST

var client = new Twitter({
  consumer_key: 'IVzYlUQIMg3RPdNjVmPLtTRwP',
  consumer_secret: '24xUe4u7FDL4zdUX81eAmPbvVbMdHbDzX02L8AaydRNPEFmvNE',
  access_token_key: '1602411984-lEMKts8lkshjViTC7aYkToIYk1L1DhXvUlcS92q',
  access_token_secret: 'Uv1lZtTPcI8v6UJwMdnpfvLz4EiBhom2hibPkgZHhAQRt'
});

app.get("/twitter", function (req, res){
    client.get('statuses/user_timeline',{screen_name: 'ArchDigest'}, function(error, tweets, response){ 
      console.log(tweets)
  });
});

//INSTAGRAM REQUEST

ig.use({ access_token: '2318793052.e84b2ed.431fcd32bede476b8f66b049280c76ad' });

ig.use({
  client_id:  "fc406fc9093f47ea81dc238cb5370fa4",
  client_secret: "60de4cc5439647cbb04a6e5a22ebdb7f"
});

var redirect_uri = 'http://localhost:3000/handleauth';

exports.authorize_user = function(req, res) {
  res.redirect(ig.get_authorization_url(redirect_uri, { scope: ['public_content'], state: 'a state' }));
};

exports.handleauth = function(req, res) {
  ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
};

app.get('/instagram', function(req, res){

  request({
    uri: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=898341624.fc406fc.094bc72720fa426f93575b89dff3f380',
    method: 'GET',
    json: true,
  }, function(error, response, body){

    // var arrayOfImages = [];
    // for (i = 0; i < 10; i++) { 
    //   console.log(body.data[i].link);
    //   var image = body.data[i].images.low_resolution.url;
    //   arrayOfImages.push(image)
    // }
    res.send(body)
  });
});

//my access token 898341624.fc406fc.094bc72720fa426f93575b89dff3f380

//to find picture url
//https://api.instagram.com/v1/users/self/media/recent/?access_token=898341624.fc406fc.094bc72720fa426f93575b89dff3f380

//to find embed for pic
//https://api.instagram.com/oembed/?url=https://www.instagram.com/p/BDJVzA5GWcK/

// This is where you would initially send users to authorize 
app.get('/authorize_user', exports.authorize_user);
// This is your redirect URI 
app.get('/handleauth', exports.handleauth);

//FACEBOOK REQUEST
app.get('/facebook', function(req, res){

  request({
    uri: 'https://graph.facebook.com/43794751042/feed',
    method: 'GET',
    json: true,
    qs: {
      access_token: 'EAATNG0EudDsBAIUMt89gUhToFLndGbjuPmcr2ryXJZCZCoUoO2KzFv8BxwfobmtvObBgJwCE1nwgtkKN9gkDprYJTX7QLURNuie62tZCC48IRRI49DFto7tnM5ttpJov2to7L3ypUQDBO15QsWoejaADN4rDZAzryFPOcCH5JgZDZD',
    }

  }, function(error, response, body){
    res.send(body)
  });
});



// app.listen(process.env.PORT || 3000, function() {
//   console.log('Server running on port 3000...');
// });