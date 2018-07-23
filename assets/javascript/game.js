//Crystal Javascript with jQuery

//global varibles
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var random;

//crystals are assigned their random values, along with a random number assigned for the user to guess 

function startGame() {

crystal1 = genRandNumTwelve();
crystal2 = genRandNumTwelve();
crystal3 = genRandNumTwelve();
crystal4 = genRandNumTwelve();
random = genRandNumTarget();

$("#randomNum").text("Number: " + random);

}

//funtion to assign a random number between 1-12
function genRandNumTwelve() {
    return Math.floor(Math.random() * 12 + 1);
};
//function to assign a random number between 19-120
function genRandNumTarget() {
    return Math.floor(Math.random() * 101 + 19);
};
console.log(genRandNumTarget())

//variables for tallying up userTotal/win/losses
var userTotal = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {

    startGame();


    //The random value assigned to the crystals will add to userTotal. The values will remain hidden and do not change within a round. 

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

    //If user is able to match the numbers, then Win's is increased by 1, userTotal is reset, and the game will start over with the function: startGame. 
    function tallies() {

        if (userTotal === random) {
            $("#wins").text("Wins: " + (wins += 1));
            userTotal = 0;
            startGame();

    //If user guesses over the random number, then losses increases by 1, userTotal is reset to 0, and the game will start over with the function: startGame. 
        } else if (userTotal > random) {
            $("#losses").text("Losses: " + (losses += 1));
            userTotal = 0;
            startGame();
        }

    }

});



