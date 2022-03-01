/*Tömbök */

var tomb=[];
var tomb2=[1,2,3,4,5]
console.log(tomb.length);
console.log(tomb2.length);

var oroszgenyo=["tü","mózses","rugácjá","poruszki","tovabb","még"];
var szinek=["kék","piros","fehér","zöld","piros","sárga"]
var ar=[200,222,233,244,99,154]
for (let index = 0; index < oroszgenyo.length; index++) {
    console.log(oroszgenyo[index]);
    
}

/*vane*/
var i=0;
while(i<szinek.length && !(szinek[i]==="bazdmeg")){
    i++;
}

var vane=i<szinek.length;
console.log(vane);

/*
Hány sárga gyümi van
mennyi az összérték
piros vagy sárga a több?
van e 100 alatti
mennyi az átlag ár
*/

/*Sárgák és pirosak*/
var piros=0;
var sarga=0;
for (let index = 0; index < szinek.length; index++) {
    if(szinek[index]=="sárga"){
        sarga++;
    }else if(szinek[index]=="piros"){
        piros++
    }
}
if(piros<sarga){
    console.log("Sárgából van több");
}else if(sarga<piros){
    console.log("Pirosból van több");
}else if(sarga==piros){
    console.log("Ugyanannyi piros és sárga");
}else{
    console.log("se piros se sárga");
}
console.log("Ennyi sárga darab van: "+sarga);

/*Összertek*/

var osszeg=0;
for (let index = 0; index < ar.length; index++) {
    osszeg += ar[index];    
}
console.log("Összérték: "+osszeg);

/*átlag*/
var atlag=osszeg/ar.length
console.log("Az átlag ár: "+atlag);

/*van e 100 alatti*/
var i=0;
while(i<ar.length && !(ar[i]<100)){
    i++;
}
var szazAlatti=i<ar.length;
console.log("Van e 100ft alatti: "+szazAlatti);
