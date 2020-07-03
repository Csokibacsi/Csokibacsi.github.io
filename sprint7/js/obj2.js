//METÓDUSOK:

let user = {
    name: "Gipsz Jakab",
    age: 30,
    sayHi: function(){ //nem primitív típus, hanem egy függvény -> metódus
        console.log("Hi");
    }
};

//ugyanígy metódusok az alábbiak:
Array.isArray(user);
Object.keys(user);

//tehát
user.sayHi; 
/* f() {
    console.log("Hi");
}
*/ // mivel nincs (), ezért kiírja, milyen function van benne

user.sayHi(); //() az invokáció jele, vagyis a metódus behívása, így már lefut a mtódus/function
// Hi

//metódus lefuttatása:
let user2 = {
    name: "Gipsz Jakab",
    age: 30,
    sayHi: function(){ 
        return "Hi";
    }
};

user.sayHi(); // az key-value párosokat kiírja, de a function nem fut le, csak kiírja, milyen function-t tartalmaz

console.log(user.sayHi( )); //itt már lefut a function, kiyírja a végeredményt // "Hi"



//////////////////////////////////////////////////////////////////////////
//clear(); //konzol törlése :-)


//this

user = {
    name: "Gipsz Jakab",
    age: 30,
    sayHi: function(){ 
        return "Hi, my name is Gipsz Jakab ";
    }
};

user.sayHi();
//Hi, my name is Gipsz Jakab "
user.name = "Ivan Makarenko";
user.sayHi();//Hi, my name is Gipsz Jakab "
//Hiába változtattuk meg a nevet, az eredeti nevet írja ki



user = {
    name: "Gipsz Jakab",
    age: 30,
    sayHi: function(){ 
        return "Hi, my name is ${this.name}! ";
    }
};
user.name = "Ivan Makarenko";
user.sayHi(); //Hi, my name is Ivan Makarenko";

//a this itt az objektumot helyettesíti
//this az az objektum, ahol van a végrehajtás
//ha simán a konzolon írom a this-t, akkor a legfelsőbb szintű Windows objektumra utal
//Window http://127.0.0.1:5500/bootstrap.html

//ha valamilyen elemre, eseményre használom a this-t, pl. a submit button actionjeként, akkor az adott html elemre vontakozóan ír ki infót
//javascriptbn inline style-t adhatunk hozzá az elemhez

let btn = document.querySelector('form button.btn-primary');
btn; //<button onclick="calcAmount()" type="button" class="btn btn-primary">Megrendelés</button>
btn.onclick = function() { //esemény (pl. onclick) kezelő függvény
    console.log(this);
}
this; //<button onclick="calcAmount()" type="button" class="btn btn-primary">Megrendelés</button>

//de formázni is tudom az eredeti html elemet és inline css-t:
btn.onclick = function() { //esemény (pl. onclick) kezelő függvény
    console.log(this.stlye.display = "none");
}//frissítéskor eltűnik a gomb





//////////////////////////////////////////////////////////////////////
//user objektum



let newUser = {
    "_id": "ag_65kndj5",
    index : 0,
    isActive: true,
    balance: "$1.243.111",
    picture: "http://placeholder.it/32x32"
};

//kivonásra írunk egy függvényt:
newUser.minusBalance = function(amount){
    newUser.balance -= amount;//dekrementálok
}
newUser.balance = 1243111; //hogy szám legyen, ne string
newUser.minusBalance(100000);
newUser; //az összes többi érték marad, a balance-ból lejön 100000

newUser.minusBalance(1); //levon egyet a newUser objektum balance kulchoz tartozó értékből

user.getBalance = function(){
    return `$ ${this.balance}`; //backtick karakter alt+96
}
user.getBalance();
//"$1243111" - utólag adtuk hozzá a dollárjelet a stringhez, mert speciális karakter


//HÁZI HÁZI HÁZI !!!!!!!
//HF!!!! currency formatter - számot ossza 1000-esenként, tehát currency formatter legyen benn, mint az excelben
///////////////////////



//////////////////////////////////////

//arrow

let adder = function(n1, n2){
    return n1 + n2;
}
adder(4,4); //8

//leegyszerűsítése : arrow function

let adder = (n1, n2) =>{
    return n1 + n2;
}

//de még ennél jobban is egyszerűsíthetünk:
//ha return-nél csak egyetln sor van, akkor a {} is elhagyható

let adder = (n1, n2) => n1 + n2;

//ha csak egyetlen paraméterem van:
let greeter = name => `Hello ${name}!`; //csaka name paraméterem van
greeter("Joe"); //"Hello Joe"









