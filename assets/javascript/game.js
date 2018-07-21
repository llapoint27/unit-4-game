//Crystal Javascript with jQuery

//Assigning random values to each crystal
var crystal1 = Math.floor(Math.random() * 12 + 1);
var crystal2 = Math.floor(Math.random() * 12 + 1);
var crystal3 = Math.floor(Math.random() * 12 + 1);
var crystal4 = Math.floor(Math.random() * 12 + 1);
// // console.log(crystal4);

//variables for tallying up score, NEED TO ADD ID'S
var userTotal = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {


    var random = Math.floor(Math.random() * 102 + 19);
    $("#randomNum").text("Number: " + random);


    //When you click on crystals the assigned random value 'crystal1,2,3,4' will add to 'your score'. The values are hidden because assigned to .text on 'your score' instead of crystal images. The values stay the same number in the duration of each round. 

    $("#amethyst").click(function () {
        userTotal = userTotal + crystal1;
        tallies();
        $("#yourScore").text("Your Score: " + userTotal);
    });

    $("#pink").click(function () {
        userTotal = userTotal + crystal2;
        tallies();
        $("#yourScore").text("Your Score: " + userTotal);
    });

    $("#rainbow").click(function () {
        userTotal = userTotal + crystal3;
        tallies();
        $("#yourScore").text("Your Score: " + userTotal);
    });

    $("#blue").click(function () {
        userTotal = userTotal + crystal4;
        tallies();
        $("#yourScore").text("Your Score: " + userTotal);
    });


    function tallies() {

        if (userTotal === random) {
            $("#wins").text("Wins: " + (wins += 1));
            userTotal = 0;
            resetRandom();
            resetCrystal();

        } else if (userTotal > random) {
            $("#losses").text("Losses: " + (losses += 1));
            userTotal = 0;
            resetRandom();
            resetCrystal();
        }

    }

    function resetRandom() {

        random = Math.floor(Math.random() * 102 + 19);
        $("#randomNum").text("Number: " + random);
    }

    function resetCrystal() {
        crystal1 = Math.floor(Math.random() * 12 + 1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        crystal4 = Math.floor(Math.random() * 12 + 1);
    }

});



