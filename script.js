//console.log("szkriptben");

//alert("hello");
//console.log("hello");

function uzenet() {
  alert("hello");
}

function init() {
  document.getElementById("uzenet").innerHTML = "Páruszkiszkázocs?";
  //console.log("inintben");
}

window.addEventListener("load", init, false);

/*változók var let const*/
var ertek;
ertek = "szöveg";

var a = "2";
var b = 3;
var osszeg = Number(a) + Number(b);
console.log(osszeg);

var logikai = true;

if (logikai) {
  console.log("igaz");
} else {
  console.log("hamis");
}

var szin = "green";

switch (szin) {
  case "red":
    console.log("piros");
    break;
  case "blue":
    console.log("kék");
    break;
  case "green":
    console.log("zöld");
    break;
  default:
    console.log("Nem ismerem ezt a színt");
}

/*
if (szin === "red") {
  console.log("piros");
} else if (szin === "blue") {
  console.log("kék");
} else if (szin === "green") {
  console.log("zöld");
} else {
  console.log("Nem ismerem ezt a színt");
}
*/

var szam="2";

if(szam===2){
    console.log("ez egy 2-es szám");
}else{
    console.log("ez nem szám!");
    console.log(typeof szam);
}