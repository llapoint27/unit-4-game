//Crystal Javascript with jQuery

$(document).ready(function () {

    //Asign random number for the user to guess
    var randomNum = "Number: ";

    var random = Math.floor(Math.random() * 120 + 19);
    $("#randomNum").text(randomNum + random);
 
    //assing random values to each crystal
    var crystal1 = Math.floor(Math.random() * 12 + 1);
    var crystal2 = Math.floor(Math.random() * 12 + 1);
    var crystal3 = Math.floor(Math.random() * 12 + 1);
    var crystal4 = Math.floor(Math.random() * 12 + 1);
    // console.log(crystal4);

    //variables for tallying up score, NEED TO ADD ID'S
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    //When you click on crystals the assigned random value 'crystal1,2,3,4' will add to 'your score'. The values are hidden because assigned to .text on 'your score' instead of crystal images. The values stay the same number in the duration of each round. 

    $("#amethyst").on("click", function () {
        userTotal = userTotal + crystal1;
        $("#yourScore").text("Your Score: " + userTotal);
        // console.log(userTotal);
    });

    $("#pink").on("click", function () {
        userTotal = userTotal + crystal2;
        $("#yourScore").text("Your Score: " + userTotal);
    });

    $("#rainbow").on("click", function () {
        userTotal = userTotal + crystal3;
        $("#yourScore").text("Your Score: " + userTotal);
    });

    $("#blue").on("click", function () {
        userTotal = userTotal + crystal4;
        $("#yourScore").text("Your Score: " + userTotal);
    });

  //If 'your score' matches the random number the you win

  function reset() { 
      //How do you run a reset function? Do you put on the above click events inside this function?

       //Once player either wins or losses, the game will start over: the random values will reset, and 'your score' will reset to 0. 

    if (userTotal === random) {
        $("#wins").text(wins++);
        alert("You did it! Congrats!");
        $(":reset");
        console.log(random);
    
      }
  }

    //if 'your score' exceeds the value of the random number then you lose
  if (userTotal > random) {
      $("#losses").text(losses++);
      alert("You lost! Try again.");
      $(":reset");
  }





});
   

