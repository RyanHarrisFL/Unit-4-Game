   
$(document).ready(function() {

var comNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
var playerCounter = 0;
var crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
var crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
var crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
var crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
var winner = 0;
var loser = 0;


// Setting the values of the crystals and computer equal to the number they generate
comNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
console.log(comNumber);
crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
console.log(crystal1);
crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
console.log(crystal2);
crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
console.log(crystal3);
crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
console.log(crystal4);

$("#com-total").text(comNumber);
$("#player-total").text(playerCounter);
$("#win-counter").text(winner);
$("#lose-counter").text(loser);

var reset = function() {
  if (playerCounter === comNumber) {
     playerCounter = 0;
     winner++;
     console.log(winner);
    $("#com-total").text(comNumber);
    $("#player-total").text(playerCounter);
    $("#win-counter").text(winner);
    $("#lose-counter").text(loser);
    comNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
  } else if (playerCounter > comNumber) {
    playerCounter = 0;
    loser++;
    $("#com-total").text(comNumber);
    $("#player-total").text(playerCounter);
    $("#win-counter").text(winner);
    $("#lose-counter").text(loser);
    comNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    
  }
  }

$('#crystal-1').click(function() {
  playerCounter += crystal1;
  console.log("test" + playerCounter);
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



