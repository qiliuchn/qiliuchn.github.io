var opacity=0;
var intervalID=0;
var opacity2 = 0;
var intervalID2 = 0;

var myLines = "Wake up, Neo... <br>The Matrix has you... <br> >";
var count = 1;

window.onload = fadeout;

function fadeout() {
    setInterval(hide, 200);
}

function hide(){
    var body=document.getElementById("openning");
    opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"))

    if(opacity>0){
        opacity=opacity-0.04;
        body.style.opacity=opacity;
    }
    else{
        clearInterval(intervalID);
        oneByOne();
    }
} 


function oneByOne()
{
    var screen = myLines.substr(0, count);
    loopText.innerHTML = screen; 
    count++;
    if (myLines.charAt(count) == "<")
        count += 3;
    if (count > myLines.length)
        fadeIn();
        return;
    setTimeout(oneByOne, 1000);
}


function fadeIn() {
    setInterval(show, 200);
}

function show() {
    var fadeinbody = document.getElementById("welcoming");
    opacity2 = Number(window.getComputedStyle(fadeinbody)
                     .getPropertyValue("opacity"));
    if (opacity2 < 1) {
        opacity2 = opacity2 + 0.005;
        fadeinbody.style.opacity = opacity2
    } else {
        clearInterval(intervalID2);

        var glowing = document.getElementById("icon");
        glowing.style["animation"] = "glow 1.5s ease-in-out infinite alternate";
    }
}