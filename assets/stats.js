// Initialize Firebase
var config = {
    apiKey: "AIzaSyC1QBYIOy9fT7Bs6Br09B1bvDiLRM2QHes",
    authDomain: "caloriestacker.firebaseapp.com",
    databaseURL: "https://caloriestacker.firebaseio.com",
    projectId: "caloriestacker",
    storageBucket: "caloriestacker.appspot.com",
    messagingSenderId: "1072454805306"
};
firebase.initializeApp(config);



function calsPerDay() {
    function find(id) { return document.getElementById(id) }

    var age = find("age").value
    var height = find("height").value * 2.54
    var weight = find("weight").value / 2.2
    var result = 0
    if (find("male").checked)
        result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
    else if (find("female").checked)
        result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
    find("totalCals").innerHTML = Math.round(result)
}
calsPerDay()

