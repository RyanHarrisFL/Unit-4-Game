   
   
$(document).ready(function() {

var comNumber= 0;
var playerCounter = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var winner;
var loser;


function initializeCalculator()

function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;

 }

comNumber = getRndInteger(19, 120);
console.log(comNumber);
crystal1 = getRndInteger(1, 12);
console.log(crystal1);
crystal2 = getRndInteger(1, 12);
console.log(crystal2);
crystal3 = getRndInteger(1, 12);
console.log(crystal3);
crystal4 = getRndInteger(1, 12);
console.log(crystal4);



 function initializeCalculator() {
   playerCounter = 10;
   comNumber = 0;
   crystal1 = 0;
   crystal2 = 0;
   crystal3 = 0;
   crystal4 = 0;

   $("#first-number, #second-number, #operator, #result").empty();
 }



});



