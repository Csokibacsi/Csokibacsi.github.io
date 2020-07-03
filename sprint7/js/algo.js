/*
KÁVÉFŐZŐ BEKAPCSOLÁSA
IF NINCS ELÉG KÁVÉ THEN
  KÁVÉ HOZZÁADÁSA
ENDIF

IF NINCS ELÉG VÍZ THEN
  VÍZ HOZZÁADÁSA
ENDIF

WHILE NEM MELEGEDETT FEL
  10 MP VÁRAKOZÁS
ENDWHILE

CSÉSZE ODAHELYEZÉSE
GOMB MEGNYOMÁSA
*/



//////////////////////////////////////////////////////////////////



//NEVEZETES ALGORITMUSOK:

//ÖSSZEGZÉS:
/*
összeg = 0
CIKLUS AMÍG van még szám
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE
*/

let tomb = [1,3,2,5,4,7,6,9];
let sum=0; 
for (let i=0; i<tomb.length; i++){
    sum += tomb[i];
}
console.log("SUM: ", sum);

//MEGSZÁMLÁLÁS
/*
db = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db +1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let tomb = [1,3,2,5,4,7,6,9];
let db = 0;
for(let i=0; i<tomb.length; i++){
    db = i;
}
console.log("DB: ", db);

//VAGY 

//PÁROS SZÁMOK MEGSZÁMLÁLÁSA:
let tomb = [1,3,2,5,4,7,6,9];
let db = 0;
for(let i = 0; i<tomb.length; i++){
    if(tomb[i] % 2 == 0){
        db++;
    }
}
console.log("Páros számok: ", db);

//SZÉLSŐÉRTÉK

/*
legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR 
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let tomb = [1,3,2,5,4,7,6,9];
let max = tomb[0];
for(let i = 0; i<tomb.length; i++){
    if(tomb[i] >max){
        max = tomb[i];
    }
}
console.log("Legnagyobb: ", max);

//VAGY LEGKISEBB:

let tomb = [1,3,2,5,4,7,6,9];
let min = tomb[0];
for(let i = 0; i<tomb.length; i++){
    if(tomb[i] < min){
        min = tomb[i];
    }
}
console.log("Legnagyobb: ", min);

//ELDÖNTÉS
/*
találat = HAMIS
CIKLUS AMÍG van elem ÉS találat=HAMIS
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let tomb = [1,3,2,5,4,7,6,9];
let talalat = false;
for(let i = 0; i<tomb.length && !talalat; i++){ //kis bővítés, hogy a talalat false
    if(tomb[i]==5){
        talalat = true;
    }
}
console.log("Van benne 5: ", min);