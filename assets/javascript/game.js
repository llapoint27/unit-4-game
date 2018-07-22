//Crystal Javascript with jQuery

var crystal1;
var crystal2;
var crystal3;
var crystal4;
var random;

function startGame() {
//Assigning random values to each crystal
crystal1 = genRandNumTwelve();
crystal2 = genRandNumTwelve();
crystal3 = genRandNumTwelve();
crystal4 = genRandNumTwelve();
random = genRandNumTarget();
$("#randomNum").text("Number: " + random);

}

function genRandNumTwelve() {
    return Math.floor(Math.random() * 12 + 1);
};
function genRandNumTarget() {
    return Math.floor(Math.random() * 101 + 19);
};
console.log(genRandNumTarget())

//variables for tallying up total/win/losses
var userTotal = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {

    startGame();


    //When you click on crystals the assigned random value 'crystal1,2,3,4' will add to 'your score'. The values are hidden because assigned to .text on 'your score' instead of crystal images. The values stay for the duration of each round. 

    // $(.class).on(click function (){
    //     $(this).attr('data-value')
    // });
   
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

    //If user is able to match the numbers, then this function is executed. Win's is increased by 1, userTotal is reset, and the funtions: resetRandom and resetCrystal will execute. 
    function tallies() {

        if (userTotal === random) {
            $("#wins").text("Wins: " + (wins += 1));
            userTotal = 0;
            startGame();

    //Is user guesses over the random number, the losses increases by 1, userTotal is reset to 0, and the functions below are executed. 
        } else if (userTotal > random) {
            $("#losses").text("Losses: " + (losses += 1));
            userTotal = 0;
            startGame();
        }

    }

});



