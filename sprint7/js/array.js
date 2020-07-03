//let cars = ["VW", "Audi", "Volvo"];

let user = [1, "joe", true, null]; //kevert tíusú értékek is lehetnek benne

user[2]; //true, vagyis a 2 indexű elem sorban a harmadik, vagyis true
user[0]; //1
user[4]; //undefined - nincs elem felvéve erre az indexre

//tömbben tömb:
let users = [
    [1, "joe", true],
    [2, "jim",false],
    [3, "tom",true]
]; //2 dimenziós tömb

typeof users; //object típus

Array.isArray(users); //array konstruktornak van egy isarray metódusa, hogy megállapítsuk, tömb-e a users - true vagy false értket ad vissza



//////////////////////////////////////////////
//Metódusok

let cars = ["VW", "Audi", "Volvo"];
cars.push("Trabant"); //beleteszöünk egy új elemet a tömbbe, pontosabban a tömb végéhez, tehát ennek lesz az utolsó indexe

cars.pop(); //eltávolítja a tömb utolsó elemét, de eltávolítás előtt van lehetőség egy külön változóba elmenteni:
//pl: let trabant = cars.pop(); 

cars.unshift("Lada"); // a tömb ELEJÉRE teszi az új elemet //elcsúsznak az indexek
cars.shift(); // az ELSŐ elemet távolítja el, és ugyanúgy, mint a pop-nál, változóba mnthetjük az eltávolított elemet //pl. let lada = cars.shift();


///////////////////////
let cars = ["VW", "Audi", "Volvo"];
cars.slice(0,1); //["VW"] - visszaadja 0 index -től 1-es indexig lévő elemeket
//a cars tömb ettől nem módosult - újat ad vissza
cars.slice(0,100); //ha magasabb indexet adunk, mint amennyi létezik, nincs baj, az összes elemet visszaadja

cars.splice(1, 1); //ez nem tól-ig, hanem a kezdő indextől hány db elemet vágjon ki //1,1 elem az ["Audi"]

//de hozzátenni is lehet elemet a splice-szal:
cars.splice(1,0,"Skoda"); //az 1-es index-nél kezdeje, aa 0 azt jelenti, hogy ne töröljön semmit, és adja hozzá a "Skoda"-t 

cars .splice(1,0, "Suzuki", "Tata","Opel"); //több elemet is hozzáadunk, a meglévő elemek indexe pedig csúszik attól függően, hogy eléjük kerülnek-e az új elemek

cars.join(", "); //a tömb elemeinek kiiratása "" között, vesszővel elválasztva



//////////////////////////////////
//paraméterek átadása:


let varOne=10, varTwo = 20;

function changeValues(one, two){ //a két változó értékét megváltoztatjuk 100-ra és 200-ra
    one=100;
    two=200;
    console.log("From function: ", one, two);
}

changeValues(varOne, varTwo); //100 200
console.log(varOne, varTwo); //itt viszont globális névtérben vagyunk, itt 10 és 20 marad az érték
//a másolat módosítása nem változtatja meg az eredeti értéket -> érték szerinti átadás történik - primitív típusokat érték szerint adja át



//objektumok átadása: - referencia kerül átadásra, míg a számoknál másolat készül belőle

function callByRef(arr){
    arr[1] = 200;
    console.log("From function: ", arr);
}
let fruits = ["Pear", "Avocado", "Apple"]; 
callByRef(fruits);
console.log(fruits);
// output: (3)["Pear", 200, "Apple"]
//nem érték szerint kerül átadásra a tömb, ez azonban ugyanaz a tömb a függvényen kívül is, mint a függvényen belül - referencia szerinti átadás, vagyis memóriacímet ad át

//globális objktumokat is könnyebben tudok módosítani így