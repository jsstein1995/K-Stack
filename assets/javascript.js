console.log("hello")

var APIKey = "PuomHh8yRq8TRNyZHPNAaEW8s5H5dSuKDkAMsQWU";

// Here we are building the URL we need to query the database


// var queryURL = "https://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=" + APIKey;

// https://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=DEMO_KEY
// Here we run our AJAX call to the NSDA API

function foodSearch() {
    $("#button-addon2").on('click', function (event) {
        event.preventDefault();

        var input = $("#foodItem").val().trim();
        var queryURL = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + input + "&sort=r&max=50&ds=Standard Reference&offset=0&api_key=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // We store all of the retrieved data inside of an object called "response"
            .then(function (response) {

                // Log the queryURL
                console.log(queryURL);
                console.log(response);

                // Log the resulting object
                // console.log(response.report.foods[1].name);

                var ndbno = response.list.item[0].ndbno;
                console.log(input);

                var newDiv = $('<div>').addClass("foodContainerDiv");
                var foodDiv = $('<div>').addClass("foodDiv");
                foodDiv.attr("data-foodId", ndbno);
                $('#results').append(foodDiv);
                foodDiv.text(ndbno);
                console.log(ndbno);




            });
    })
}

foodSearch();


$(document).on('click', '.foodDiv', function (event) {
    event.preventDefault();
    console.log($(this).attr('data-foodid'))


    var foodId = $(this).attr('data-foodid')
    var nutritionqueryURL = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=PuomHh8yRq8TRNyZHPNAaEW8s5H5dSuKDkAMsQWU&ndbno=" + foodId + "&nutrients=205&nutrients=204&nutrients=208&nutrients=269";
    // https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=01009
    $.ajax({
        url: nutritionqueryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
            console.log(response);
        });

});


// for (var i = 0; i < results.length; i++) {
                //     var calories = response.report.foods[i].nutrients[0].value;
                //     var foodItem = response.report.foods[i].name
                //     // console.log(foodItem);
                //     // console.log(calories)

                //     if (input === foodItem) {
                //         console.log(calories);
                //     }
                //     else {
                //         console.log("no match");
                //     }
                // }