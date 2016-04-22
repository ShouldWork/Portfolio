/**
 * Created by Krysp on 4/21/16.
 */
var clicked = '0';
var myBtn =  document.getElementById('navBtner').style;
function btnMove(){
    if (clicked == '0') {
        clicked = '1';
        myBtn.transform = 'rotate(180deg)';
        myBtn.left = '200px';
        myBtn.color = 'white';
    } else {
        clicked = '0';
        myBtn.transform = 'rotate(0deg)';
        myBtn.left = '0px';
        myBtn.color = 'black';
    }
    $("#wrapper").toggleClass("toggled");
}


// $("#navBtner").click(function(e) {
//     $("#wrapper").toggleClass("toggled");
// });


function moveMe(){
   document.getElementById('sm-cont').style.position = 'absolute';
   document.getElementById('sm-cont').style.top = '0px';
   document.getElementById('sm-cont').style.right = '100px';
}


$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
