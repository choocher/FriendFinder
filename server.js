// Dependencies
var express = require("express");
var app = express();
var bodyParser = require('body-parser')

// Set the port of our application
var PORT = process.env.PORT || 8080;

// create application/json parser-->commented out jsonParser & only using urlencoderParser, when setting up the AJAX/POST ?? Why does she do that??
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// create NEW application/x-www-form-urlencoded parser -->ASK TUTOR WHY (tutorial time lapse 15:19)
// Reference Documentation regarding "extended" http://www.npmjs.com/package/body-parser 
app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/apiRoutes.js")(app);

require("./app/routing/htmlRoutes.js")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});