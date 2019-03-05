   
$(document).ready(function() {

// Setting my variables to be available globally.
var comNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
var playerCounter = 0;
var crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
var crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
var crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
var crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
var winner = 0;
var loser = 0;


// Writing the values of the computer number player total and crystals on the html.
$("#com-total").text(comNumber);
$("#player-total").text(playerCounter);
$("#win-counter").text(winner);
$("#lose-counter").text(loser);

// Reset function to increment the loser or winner and reset the random numbers based on outcome of first game. 
var reset = function() {
  if (playerCounter === comNumber) {
     playerCounter = 0;
     winner++;
     console.log(winner);
    comNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    $("#com-total").text(comNumber);
    $("#player-total").text(playerCounter);
    $("#win-counter").text(winner);
    alert("Winner winner hamburger dinner!");
  } else if (playerCounter > comNumber) {
    playerCounter = 0;
    loser++;
    comNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    $("#com-total").text(comNumber);
    $("#player-total").text(playerCounter);
    alert("You lose!");
    $("#lose-counter").text(loser);
    
  }
  }

// Buttons will add value of random number generated for each and when clicked on, update total of player counter and reset in event of win or loss
$('#crystal-1').click(function() {
  playerCounter += crystal1;
   $("#player-total").text(playerCounter); 
   reset(); 
  

});

$('#crystal-2').click(function() {
  playerCounter += crystal2;
   $("#player-total").text(playerCounter);
   reset(); 
  

});

$('#crystal-3').click(function() {
  playerCounter += crystal3;
   $("#player-total").text(playerCounter); 
   reset(); 
  
});

$('#crystal-4').click(function() {
   playerCounter += crystal4;
   $("#player-total").text(playerCounter);
   reset(); 
  
});

});



