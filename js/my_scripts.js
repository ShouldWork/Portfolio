/**
 * Created by Krysp on 4/21/16.
 */



var imgs = {1:"It's the final", 2:"count down", 3:"!!!!!!!",4:"tada"}
var clicked = '0';
var myBtn =  document.getElementById('navBtner').style;
var text = ''

function navBtn(){
    $("#wrapper").toggleClass("toggled");
    if (clicked == '0') {
        clicked = '1';
        myBtn.transform = 'rotate(180deg)';
        myBtn.left = '0px';
        myBtn.color = 'black';
    } else {
        clicked = '0';
        myBtn.transform = 'rotate(0deg)';
        myBtn.left = '200px';
        myBtn.color = 'ghostWhite';
    }
}

function quoteClass(){
    var elements = document.querySelectorAll('[id^="quoteBox"]');
    for (var i = 0; i < elements.length; i++) {
        var thisId = elements[i].id;
        var thisElementId = document.getElementById(thisId);
        var thisTextLength = thisElementId.innerText.length;
        if (thisTextLength <= '119') {
            $("#" + thisId).addClass("shortQuote");
        } else if (thisTextLength >= '120' && thisTextLength <= '289') {
            $("#" + thisId).addClass("medQuote");
        } else if (thisTextLength >= '290' && thisTextLength <= '449') {
            $("#" + thisId).addClass("longQuote");
        } else if (thisTextLength >= '450') {
            $("#" + thisId).addClass("xlongQuote")
        }
    }
}

document.getElementById("noGo1").addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById("noGo2").addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById("noGo3").addEventListener("click", function(event){
    event.preventDefault()
});

