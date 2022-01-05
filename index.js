var p1 = prompt("Enter player1 name");
var p2 = prompt("Enter player2 name");
var f = document.querySelectorAll("p")[0];
f.innerHTML = p1;
var g = document.querySelectorAll("p")[1];
g.innerHTML = p2;


var ran1 = Math.floor(Math.random()*6+1);
var d = ran1+".jpg";
var t = document.querySelectorAll("img")[0];
t.setAttribute("src", d);




var ran2 = Math.floor(Math.random()*6+1);
var e = ran2+".jpg";
var u = document.querySelectorAll("img")[1];
u.setAttribute("src", e);


if (ran1>ran2){
  document.querySelector("h1").innerHTML = "🚩"+p1+" win!";
}
else if (ran2>ran1){
  document.querySelector("h1").innerHTML = p2+" win!🚩";
}
else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
