/**
 * Created by Krysp on 4/26/16.
 */

// JavaScript Document

var cardsflipped = 0;
var cardonetype = 0;
var cardtwotype = 0;
var flippedone;
var flippedtwo;
var score = 0;
var result = '';

function turnCard(itemid, cardtext, connection){
    "use strict";
    document.getElementById("myResult").innerText = '';
    var mycard = document.getElementById(itemid);
    mycard.style.background = "none";
    mycard.style.backgroundColor = "#FFFFFF";
    mycard.firstChild.innerHTML = cardtext;
    cardsflipped ++;
    //alert("card is flipped" + cardsflipped);

    if(cardsflipped <= 1){
        cardonetype = connection;
        flippedone = itemid;
    }
    if(cardsflipped >= 2){
        cardtwotype = connection;
        flippedtwo = itemid;
        if(cardonetype === cardtwotype){
            document.getElementById("myResult").innerText = 'It\'s a match!';
            document.getElementById("myResult").style.color = 'green';
            score++;
            document.getElementById('myscore').innerText = score;
            document.getElementById(flippedone).style.display = "none";
            document.getElementById(flippedtwo).style.display = "none";
            cardsflipped = 0;
        }
        else{
            document.getElementById("myResult").innerText = 'Failed';
            document.getElementById("myResult").style.color = 'red';
            score--;
            cardonetype = 0;
            cardtwotype = 0;
            document.getElementById('myscore').innerText = score;
            document.getElementById(flippedone).firstChild.innerHTML = "";
            document.getElementById(flippedtwo).firstChild.innerHTML = "";
            document.getElementById(flippedone).style.background = "none";
            document.getElementById(flippedtwo).style.background = "none";
            document.getElementById(flippedone).style.backgroundImage = "url('../resources/imgs/card.png')";
            document.getElementById(flippedtwo).style.backgroundImage = "url('../resources/imgs/card.png')";
            cardsflipped = 0;
        }
    }
}

