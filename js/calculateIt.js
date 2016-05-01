/*
 * Created by Krysp on 4/25/16.


 Add in all variables needed to calculate the following:
 circumfrance of a
 square
 triangle
 circle
 wight of a person on:
 Earth
 The moon
 Jupitor
 function weightMoon(){
 calcWeight = weight * gravityMoon;
 alert(calcWeight);
 }

 function weightEarth(){
 calcWeight = weight * gravityEarth;
 alert(calcWeight);
 }

 function weightJupitor(){
 calcWeight = weight * gravityJupitor;
 alert(calcWeight);
 }


 */










var Earth = 1;
var Jupitor = 2.36;
var Moon = 0.166;
var calcWeight = 0;
var enteredWeight = 0;
var thePlanet ='';

function weight(){
    thePlanet = document.getElementById('myPlanet').value;
    enteredWeight = document.getElementById('myWeight').value;
    if (thePlanet === 'Moon'){
        calcWeight = enteredWeight * Moon;
    } else if (thePlanet === 'Earth') {
        calcWeight = enteredWeight * Earth;
    } else if (thePlanet === 'Jupitor'){
        calcWeight = enteredWeight * Jupitor;
    }
    alert(calcWeight);
}



