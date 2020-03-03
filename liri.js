require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var axios = require('axios');

// axios.get("")

var runApp = process.argv[2]

if (runApp === "concert-this") {
    var artist = process.argv[3] + process.argv[4] + process.argv[5]
    var bitUrl = ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    console.log(bitUrl);
    
    
    
}
