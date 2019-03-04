   
   
$(document).ready(function() {

var comNumber= 0;
var playerCounter = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var winner;
var loser;

// This is the code that isn't working for the reset. :(
/* 
var reset = function() {
   crystal1 = null;
   crystal2 = null;
   crystal3 = null;
   crystal4 = null;

 };
*/

// This generates a random numbers for the computer. 
function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
 }

// Setting the values of the crystals and computer equal to the number they generate
comNumber = getRndInteger(19, 120);
console.log(comNumber);
crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
console.log(crystal1);
crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
console.log(crystal2);
crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
console.log(crystal3);
crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
console.log(crystal4);


// This is displaying the computer number that was generated 
$("#com-total").text(comNumber); 

// This is a function that adds to the player score when clicked on

$('#crystal-1').click(function() {
   playerCounter += crystal1;
   $("#player-total").text(playerCounter); 
   //playerCounter.push(crystal1);
  // $("#second-number").text(secondNumber);

});

$('#crystal-2').click(function() {
   playerCounter += crystal2;
   $("#player-total").text(playerCounter); 
   //playerCounter.push(crystal1);
  // $("#second-number").text(secondNumber);

});

$('#crystal-3').click(function() {
   playerCounter += crystal3;
   $("#player-total").text(playerCounter); 
   //playerCounter.push(crystal1);
  // $("#second-number").text(secondNumber);

});

$('#crystal-4').click(function() {
   playerCounter += crystal4;
   $("#player-total").text(playerCounter); 
   //playerCounter.push(crystal1);
  // $("#second-number").text(secondNumber);

});




});



