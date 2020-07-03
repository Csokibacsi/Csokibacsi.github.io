//Ilyen egyszerűen is létrehozhatjuk, rögtön definiálva:
let user = {
    name: "Cserepes Virág",
    age: 22,
    city: "Szeged"
};

//Vagy külön deklaráljuk:
let admin = new Object(); //üres objektum még

//shorthand: 
let customer = {};//ez a legegyszerűbb

user.name; //így nyerjük ki az adatot -> kulcs és érték
//míg a tömböket indexeljük, számokkal hivatkozunk rájuk pl. cars[1], addig az objektumokra kulccsal hivatozunk,
// és az objektum egy eleme 1 kulcsból és 1 értékből áll

Object.keys(user); //megadja a user objektum kulcsai
// (3) ["name", "age","city"]

//ha az értékeket akarom lekérni:
Object.values(user); //(3) ["Cserepes Virág", "20","Szeged"]

//ha kulcs-érték párt akarok kinyerni:
Object.entries(user); 
//(3) [Array(2), Array(2), Array(2)]
//0: (2) ["name", "Cserepes Virág"]
//1: (2) ["age", 20]
//2: (2) ["city", "Szeged"]

Object.entries(user)[1]; //(2) ["age",20]
Object.entries(user)[1][0]; //"age"

//mivel ez nem egy tömb, user.length parancs nem fog működni, az elemek hossza nem lekérhető, de a kulcsok és/vagy értékek hosszáa igen, EZÉRT:
Object.keys(user).length; // az elemek hosszát nem tudom lekérni, de a kulcsok hosszát igen //3
Object.entries(user).length; //3
//tehát a kulcsok vagy az értékeke lehívásával megnézhetjük az elemek/rekordok számát


////////////////////////////

user = {}; //{} kiürítettük
user = {
    name: "Isti"
}; //{name:"Isti"}

//KONSTANS OBJEKTUM:

const user = {
    name:"Lacika",
    age: 33
}; //const-nál nem hozhatok létre üres objektumot, definiálnom kell

user = { name: "Pist"}; //HIBÁT DOB, mert konstansnak akarok értéket adni!
//a memóriában elmenti az id-t, és a hozzá tartozó címet, mikor változót hozok létre, mivel const-ként hoztam létre, ezt a kötést nem lehet megváltoztatni, tehát a memóriacím - id párost nem változtathatom meg

user.name = "Sanyi"; //"Sanyi"
//itt viszont mégis lefut, mert külön-külön a value-t megváltoztathatom, mert a memóriacím és azonosító kapcsolat nem borul fel, csupán más értéket adok az adott elemnek, de az objektum struktúrája nem változik meg

//egy objektum immutable - nem tud megváltozni, viszont a tulajdonságai tudnak változni, a KONSTANS csak magára a változóra vonatkozik, a tulajdonságaira nem!




////////////////////////////////////////////
//FOR IN

let userData = {
    name: "Cserepes Virág",
    age: 22,
    city: "Szeged"
};

for (let i=0; i<userData.length; i++){
    console.log(user[i]);
} //hiába indítom a ciklust kiiratásra, nem történik semmi, mert pl. a userData-nak nincs length tulajdonsága

//erre jo a for in ciklus

for (let k in userData){
    console.log("Key: ", k, "value: ", userData[k]);
}
// Key: name value: Cserepes Virág
// Key: age value: 22
// Key: city value: Szeged
//-> a ciklusfejben szereplő k, az  a kulcs (as key), illetve userData[k] esetén az adott kulcshoz tartozó érték

user.name; //a kulcs segítségével elérem az objektum tulajdonságát - "Cserepes Virág"

user["name"]; //egyenértékű a fentivel is - FYI: a name-t ""-be kell tenni, mert ez egy string!
//ha egy változóból jön a kulcs, nehogy a változó nevével keverje össze, azért kell a userData[k]-t használni a for in ciklusban
//a key és a k változó mindig string lesz


//////////////////////////////

//for of 

let autok = ["VW", "BMW", "Opel"];

//Egy tömb általában jól és könnyen iterálható, mert az elemeknek fix sorrendje és indexe van, de a tömbök kulcs-érték párban vannak, nem egyértelmű, melyik rekord melyik után jön - nem iterálható!

for(let auto of autok){//létrehozzuk az auto változót, amibe kiiratjuk az autok elemeit
    console.log(auto);
} //simán lefut, mert iterálható

for (let user of userData){
    console.log(user);
} //NEM iterálható, nem fut le

//nem a kulcsokon, hanem az értékeken megy végig, tehát a for in ciklussal ellentétben az értékeket listázza ki, nem a kulcsokat

//sima változón is lefuttatható:
let str = "hello";
for(let char of str){
    console.log(char);
} //soronként egyesével kiírja a karaktereket
// h
// e
// l stb.


//objektumoknál a kulcsokat járhatjuk be a for of ciklussal:

for (let k of Object.keys(userData)){
    console.log(k);
}
//tehát az objectum kulcsain iterálunk végig, ami így már egy tömb, ezért végigjárható:
//name
//age
//email

for (let k of Object.keys(userData)){
    console.userData(k);
}
//Cserepes Virág
//22
//Szeged

for (let val of Object.values(userData)){ 
    console.log(val);
}//kiolvaom az éttékeket, aztz tömbbe rakja, amit már végigiterálhatok
//Cserepes Virág
//22
//Szeged

for (let entry of Object.entries(userData)){ 
    console.log(entry[0], entry[1]); //0 a kulcs, az 1 az érték
}
// name Cserepes Virág
// age 22
// city Szeged