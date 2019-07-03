const axios = require('axios');
// API Details ---------------------------------------
APIKEY = "AIzaSyC7qvCoesb0g_CD0lfCBR1rq-ksUzQY7m4";
// Sample Data ---------------------------------------
// lat = -33.8670522;
// lng = 151.1957362;
// radius = 1500;
// type = "resturant";
// keyword = "Cruise";
// --------------------------------------------------- 
//----Test using this URL in specified port: localhost:_portnumber_/nearbysearch/lat=-33.8670522&lng=151.1957362&radius=1500&type=resturant&keyword=Cruise //
module.exports = function (app, db) {
    app.get('/nearbysearch/lat=:lat&lng=:lng&radius=:radius&type=:type&keyword:keyword', (req, res) => {
        axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + req.params.lat + ',' +  req.params.lng + '&radius=' +  req.params.radius + '&type=' +  req.params.type + '&keyword='+  req.params.keyword + '&key=' + APIKEY + '')
        .then(function (response) {

            if (response.data.status == "OK") {
                res.send(response.data);
            }
            else {
                res.status(400).send("Error Status - 400 - Bad Request Error");
            }
        })
        .catch(function (error) {
            res.status(500).send("Error Status - 500 - Internal Server Error");
        });
    });
};