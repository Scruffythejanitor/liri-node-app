require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var moment = require('moment');
var fs = require('fs')

var runApp = process.argv[2]
var info = process.argv[3]

switch (runApp) {
    case "concert-this":
        concertThis(info);
        break;
    case "spotify-this-song":
        spotifyThisSong(info);
        break;
    case "movie-this":
        movieThis(info);
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
};

function concertThis(info) {
    axios.get("https://rest.bandsintown.com/artists/" + info + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log("----------------------------------------");
                console.log("Venue: " + response.data[i].venue.name);
                console.log("City: " + response.data[i].venue.city);
                console.log("Date & Time: " + moment(response.data[i].datetime).format('llll'));

            }
        })
        .catch(function (error) {
            console.log(error);

        })
};

function spotifyThisSong(info) {
    if (!info) {
        info = 'The Sign'
        console.log(info);

    }
    spotify
        .search({ type: 'track', query: info })
        .then(function (response) {
            for(i=0; i < 10; i++){
                console.log('---------------------------------------------');
                console.log('Artist: ' + response.tracks.items[i].artists[0].name);
                console.log('Track Title: ' + response.tracks.items[i].name);
                console.log('Album: ' + response.tracks.items[i].album.name);
                console.log('Prieview URL: ' + response.tracks.items[i].preview_url);
                console.log("          ");
            }
        })
        .catch(function (err) {
            console.log('Error occurred: ' + err);
        });
};

function movieThis(info){

    if(!info){
        info = 'Mr. Nobody'
        console.log(info);
    }
    axios.get("http://www.omdbapi.com/?apikey=25bb1190&t=" + info)
    .then(function(response){
        console.log('-------------------------------------------');
        console.log('');
        console.log('\x1b[36m%s\x1b[0m','Movie Title: ' + response.data.Title);
        console.log('\x1b[33m%s\x1b[0m','Release Year: ' + response.data.Year);
        console.log('');
        console.log('\x1b[35m%s\x1b[0m','IMDb Rating: ' + response.data.imdbRating);
        console.log('\x1b[34m%s\x1b[0m','Rotton Tomatoes Rating: ' + response.data.Ratings[1].Value);
        console.log('');
        console.log('\x1b[32m%s\x1b[0m','Country Of Origin: ' + response.data.Country);
        console.log('\x1b[31m%s\x1b[0m','Movie Language: ' + response.data.Language);
        console.log('');
        console.log('\x1b[36m%s\x1b[0m','Movie Plot: ' + response.data.Plot);
        console.log('\x1b[33m%s\x1b[0m','Actors In Movie: ' + response.data.Actors);
        console.log('');
    })
    .catch(function (err) {
        console.log('Error occurred: ' + err);
    });
}

function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(',');
        console.log(dataArr[1]);
        
        spotifyThisSong(dataArr[1]);
    })
}