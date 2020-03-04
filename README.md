# Liri-Node-App
## Welcome to your new personal assistant LIRI! (Lee-rie... Like Siri, but...)
---
# Introduction
You already know everybody's favorite personal assistant Siri. Now meet **Liri**, Siri's cousin from the midwest. You know know you can just say "Hey Siri" and she will respond? Well forget about that with Liri! Liri prefers the written word... in node form... in a termimal windw. So almost *exactly* the same!
# How To Use Liri
1. Clone this repo!
2. Open your terminal.
3. Locate recently cloned repo on the command line.
4. Type the words "npm install" (with no quotations of course) Example below

        liri-node-app % npm install

This should install the following packages:
  * node-spotify-api (lets us talk to s)
  * moment (time conversion magic)
  * dotEnv (helps with loading crucial elements)
  * axios (allows us to talk to api(s))

5. Enter "touch .env" into the command line to create a new file in the folder called .env

        liri-node-app % touch .env

6. Copy the following into the file:
   
   '# Spotify API keys'

   'SPOTIFY_ID=your-spotify-ID-here'

   'SPOTIFY_SECRET=your-spotify-secret-here'

7. Create a [Spotify developer account](https://developer.spotify.com/) and get your api and secret codes. Paste them over the "your-spotify-ID-here" & "your-spotify-secret-here" in the .env file.

8. Now lets see what this can do!

# Functions

  * **concert-this** (lets Liri know you want to see concerts)
  * **spotify-this-song** (lets Liri know you want to know more info about a certain song)
  * **movie-this** (lets Liri know you want to know more about a certain movie)
  * **do-what-it-says** (lets Liri pull info from a random.txt file...Exciting!)

  ## Example: concert-this

        liri-nod-app % node liri.js concert-this the black keys
        ----------------------------------------
        Venue: Central Park
        City: Atlanta
        Date & Time: Fri, May 1, 2020 10:00 PM
        ----------------------------------------
        Venue: Scotiabank Centre
        City: Halifax
        Date & Time: Tue, May 5, 2020 7:30 PM
        ----------------------------------------
        Venue: Avenir Centre
        City: Moncton
        Date & Time: Wed, May 6, 2020 7:30 PM
        ----------------------------------------
        Venue: Bell Centre
        City: Montreal
        Date & Time: Fri, May 8, 2020 7:30 PM

 ## Example: spotify-this-song

        liri-node-app % node liri.js spotify-this-song shine a little light
        ---------------------------------------------
        Artist: The Black Keys
        Track Title: Shine A Little Light
        Album: "Let's Rock"
        Prieview URL: https://p.scdn.co/mp3-preview7fb7f9f4bc8bf7fb2d2402268...
 
 ## Example: movie-this

        liri-node-app % node liri movie-this the general  
        -------------------------------------------

        Movie Title: The General
        Release Year: 1926

        IMDb Rating: 8.1
        Rotton Tomatoes Rating: 92%

        Country Of Origin: USA
        Movie Language: English

        Movie Plot: When Union spies steal an engineer's beloved locomotive, he pursues it single-handedly and straight through enemy lines.
        Actors In Movie: Marion Mack, Glen Cavender, Jim Farley, Frederick Vroom

 ## Example: do-what-it-says

        liri-node-app % node liri do-what-it-says  

        -----------------------------------------

        ***IT'S A SURPRISE!*** 
        


# Epilogue

   Well that is pretty much it. It is a pretty cool app. Let me know what you think!

   -Andrew Pemberton