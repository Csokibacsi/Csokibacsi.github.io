for (let i=0; i<5; i++){
    console.log(i);
}

let fruits = ["Pear", "Avocado", "Apple"];

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
for (let i=0; i<fruits.length+1; i++){
    console.log(fruits[i]);
}//  több elemet ad ki a +1 egy miatt, 3 elem esetén lesz 5, ebből db undefined, mivel nem létező elemeket is ki kell írni, túlindexeli a tömböt

for (let i=0; i<fruits.length+1; i++){
    if(i>1){
        continue; //a continue utáni dolgok nem hajtódnak végre, hanem visszaugrik a fejlécbe a végrehajtáés, és ezért nem írja ki az 1-esnél nagyobb indexű elemeket, de i++ végrehajtást folytatja, megpróbálja ismét végrehajtani, amíg a ciklus tart, de nem sikerül persze
    }
    console.log(fruits[i]);
}

for (let i=0; i<fruits.length+1; i++){
    if(i>1){
        break; //break esetén nem ugrik vissza a fejlécbe, nem növeli az i-t, és nem próbálja végrehajtani, megállítja műveletet
    }
    console.log(fruits[i]);
}



/////////////////////////////////////////////////////////
//összetett operátorok

let age = 33;
age = age +4; //37

age += 10; //47 - compund operator (összevont operátor)
// age = age +10; rövidítve

age /= 3; // age = age/3;
age*=3; // age = age*3;
age-=7; //age = age-7;
age%2; //age maradéka - 33/2-nek 1 lesz a maradéka


/////////////////////////////////////////////////////
//Ternary operator

let age = 33;
let canVote;

if(age <18){
    canVote=false;
} else {
    canVote=true;
}// true
//ternary operatorrel:
canVote = age < 18 ? false : true;// feltétel ? ha hamis : ha igaz

//még rövidebben:
canVote = age > 18;  //simán true lesz

let city = "NY";

canVote = (age>=18 && city == "NY") ? true : false; 
//ha mindkét állítás igaz ? true : egyébként false

//ha nem boolean lenne, akkor másképp kell eljárni:

let level = 1;
let salary = level>2 ? "1.2M" : "0.8M";
//itt már konkrét értéket kell kiadnia - "0.8M"
level+=1;
let salary = level>2 ? "1.2M" : "0.8M"; //most már "1.2M" lesz






