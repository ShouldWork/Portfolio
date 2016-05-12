/*
 * Created by Krysp on 4/21/16.
 */

var imgs = {1:"It's the final", 2:"count down", 3:"!!!!!!!",4:"tada"}
var clicked = '0';
var myBtn =  document.getElementById('navBtner').style;
var text = '';

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


var lang_ahk = {
    pname: 'AHK',
    level: 'Proficient',
    scaleNum: 6,
    projects: {
        casestore: 'Case Store',
        queueView: 'Queue View & Management'
    }
};

var lang_css3 = {
    pname: 'CSS3',
    level: 'Familiar',
    scaleNum: 3,
    projects: {
        page: 'This current page!',
        linkToPage: '<a href="../src/index.html" target="_blank">My profile page</a>'
    }
};
var lang_html5 = {
    pname: 'HTML5',
    level: 'Familiar',
    scaleNum: 3
};
var lang_javaScript = {
    pname: 'JavaScript',
    level: 'Familiar',
    scaleNum: 3
};
var lang_tsql = {
    pname: 'T-SQL',
    level: 'Familiar',
    scaleNum: 4
};

var languages = [lang_ahk, lang_css3, lang_html5, lang_javaScript, lang_tsql];


function resultUpdate(id) {
    var projectText = "";
    for (var l = 0; l < languages.length; l++) {
        if (languages[l].pname === id) {
            var currentLanguage = languages[l].pname;
            for (var p in languages[l].projects) {
                projectText += languages[l].projects[p] + "<br>";
            }
        }
        
        document.getElementById('resultKnow').innerHTML = projectText;
        document.getElementById(id).style.left = '850px';
        document.getElementById(id).style.top = "-170px";
    }
}

function knownLang(id) {
    for (var i = 0; i < languages.length; i++) {

        if (languages[i].pname === id) {
            var el =  document.getElementById(id);
            var a = el.innerHTML;
            if (a == id) {
                el.innerHTML = ' You know how to program in ' + languages[i].pname + '. I would say you are ' + languages[i].level + ' in ' + languages[i].pname + '. I would give it a scale of ' + languages[i].scaleNum + ' out of 10!';
                el.style.color = 'green';
                el.style.fontSize = '120%';
                el.style.fontFamily = "'Roboto, san-serif'"
            } else {
                el.innerHTML = id;
                el.style.color = 'ghostWhite';
                el.style.fontSize = "150%";
                el.style.fontFamily = "'Rock salt', cursive"
            }
            console.log('You know how to program in ' + languages[i].pname + '. I would say you are ' + languages[i].level + ' in ' + languages[i].pname + '. I would give it a scale of ' + languages[i].scaleNum + ' out of 10!')
        }
    }
}

var images = ['../resources/imgs/lizard1.jpg','../resources/imgs/owl.jpg','../resources/imgs/oceanwave.jpg']
var thisOne = 0;
function changeImage(id) {
    if (id == 'nextImage') {
        thisOne++;
    } else {
        thisOne--;
    }
    if (thisOne <= 0) {
        thisOne = 0;
    } else if (thisOne >= images.length) {
        thisOne = images.length -1;
    }
    document.getElementById('slide-container').style.backgroundImage = "url(" + images[thisOne] + ")";
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



/*

Reflector Examples

var Reflector = function(obj) {
    this.getProperties = function() {
        var properties = [];
        for (var prop in obj) {
            if (typeof obj[prop] != 'function') {
                properties.push(prop);
            }
        }
        return properties;
    }
};


var Reflector = function(obj) {
    this.getAllMethods = function() {
        var methods = [];
        for (var method in obj) {
            if (typeof obj[method] = 'function') {
                methods.push(method);
            }
        }
    };
    return methods;
};
*/
