/*
 * Created by Krysp on 4/21/16.
 */



var imgs = {1:"It's the final", 2:"count down", 3:"!!!!!!!",4:"tada"}
var clicked = 1;
var elemStyle =  document.getElementById('navBtner').style;
var text = '';
var clicked2 = 1;

function btnMove() {
    $("#wrapper").toggleClass("toggled");
    clicked = (clicked === 0) ? 1 : 0;
    if (clicked === 0) {
        elemStyle.transform = 'rotate(180deg)';
        elemStyle.left = '0px';
        elemStyle.color = 'black';
    } else {
        elemStyle.transform = 'rotate(0deg)';
        elemStyle.left = '200px';
        elemStyle.color = 'ghostWhite';
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

function moveMe(){
    document.getElementById('sm-cont').style.position = 'absolute';
    document.getElementById('sm-cont').style.top = '0px';
    document.getElementById('sm-cont').style.right = '100px';
}


$(document).ready(function(){
    $("sss").click(function(){
        $(this).hide();
    });
});

