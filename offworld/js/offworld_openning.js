var opacity=0;
var intervalID=0;

var myLines = "Wake up, Neo... <br>The Matrix has you... <br> >";
var count = 1;

window.onload=fadeout;

function fadeout(){
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
        return;
    setTimeout(oneByOne, 1000);
}
