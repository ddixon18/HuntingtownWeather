
var twitter = require('twit');
var weather = require('weather-js');
var config = require('./config');

var t = new twitter(config);

var tweetCurrentWeather = function() {
  weather.find({search: 'Hungtingtown, MD', degreeType: 'F'}, function(err, result) {
    if(err)
      console.log(err);
    curr = result[0].current.temperature;
    skytxt = result[0].current.skytext;
    var str = "It is " + curr + " degrees Fahrenheit and " + skytxt + " in Hungtingtown, MD";
    t.post('statuses/update', { status: str }, function(err, data, response) {
      console.log('Tweeted!');
    })
  });
}

setInterval(tweetCurrentWeather, 14400000);
//tweetCurrentWeather();
