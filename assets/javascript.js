console.log("hello")

var APIKey = "PuomHh8yRq8TRNyZHPNAaEW8s5H5dSuKDkAMsQWU";

// Here we are building the URL we need to query the database
var queryURL = "http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=" + APIKey + "&nutrients=205&nutrients=204&nutrients=208&nutrients=269";

// var queryURL = "https://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=" + APIKey;

// https://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=DEMO_KEY
// Here we run our AJAX call to the NSDA API
$.ajax({
    url: queryURL,
    method: "GET"
})
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            console.log(results[i].report.foods.name);
        }



        // Transfer content to HTML
        // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        // $(".wind").text("Wind Speed: " + response.wind.speed);
        // $(".humidity").text("Humidity: " + response.main.humidity);
        // $(".temp").text("Temperature (F) " + response.main.temp);

        // // Log the data in the console as well
        // console.log("Wind Speed: " + response.wind.speed);
        // console.log("Humidity: " + response.main.humidity);
        // console.log("Temperature (F): " + response.main.temp);
    });