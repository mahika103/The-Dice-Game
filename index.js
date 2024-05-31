var randomNumber=Math.floor(Math.random()*6)+1;
var randomImageSource1="images/dice"+ randomNumber +".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2= "images/dice" +randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="𓍢ִ໋🌷͙֒PLAYER1 WINS";
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="𓍢ִ໋🌷͙֒PLAYER2 WINS";
}
else{
    document.querySelector("h1").innerHTML="🎀DRAW🎀";
}
