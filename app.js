

var searchFrequency = 0;
var searchFirstTrain = 0;
var searchFrequency = $("#search-frequency").val();
var searchFirstTrain = $("#search-first-train").val();

// Assumptions
    var tFrequency = searchFrequency
// Time is 3:30 AM
    var firstTime = searchFirstTrain;
// First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);
// Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
// Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
// Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);
// Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
// Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

$("#run-search").on("click", function(event) {
$("#results").text(Response);
})

