// Instructions

// Using the previous example as a guide, create an app that has two web servers.
var http = require('http');
// One that listens on port 7000 and one that listens on port 7500.
var posPort = 7000;
var negPort = 7500;

// The one listening on port 7000 will always tell the user something good about themselves.
function posRequest(req, res) {
    var pos = [`You're awesome!`, `Rockin that outfit B]`, `Rad, dude =]`, `You're great.`];
    var random = pos[Math.floor(Math.random() * pos.length)];
    res.end(random);
}
// The one listening on 7500 will always tell the user something bad about themselves.
function negRequest(req, res) {
    var neg = [`You don't look so good today...`, `Hmm..bad hair day?`, `Need some gum? Cough..`, `Bat in the cave...`];
    var random = neg[Math.floor(Math.random() * neg.length)];
    res.end(random);
}

var posServer = http.createServer(posRequest);
var negServer = http.createServer(negRequest);

posServer.listen(posPort, function() {
    console.log(`listening on: http://localhost:${posPort}`);
});

negServer.listen(negPort, function(){
    console.log(`listening on: http://localhost:${negPort}`);
});
// Make sure you create a Github repo and commit this code!
// Bonus

// Look for other ways to expand what your server can do.As possibilities:
// Generate the good / bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet


// [11: 01]
// Start off by running npm init as well