var screw =document.getElementById("screw");
var screwnut =document.getElementById("screwnut");
var grommet =document.getElementById("grommet");
var form =document.getElementById("form");
var Aus = document.getElementById("ausgabe")

var screwpreis =20;
var screwnutpreis =10;
var grommetpreis =5;


form.addEventListener("submit",event=>{
    event.preventDefault();
    var Finalpreis = screw * screwpreis + screwnut * screwnutpreis + grommet * grommetpreis;
    Aus.innerHTML= "hallo";
});

