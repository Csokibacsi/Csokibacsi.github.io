new Date(); 

new Date(2020,7,30); //2020.06.30. -mert index a 7, tehát június

new Date().getDay(); //mai nap a hét napjai közül - integer 1-7-ig Vasárnap kezdettel
new Date(2020,7,30).getDay(); 

let weekDay = newDate().getDay();

let dayName = '';

switch(weekDay){
    case 0: dayName = "Vasárnap";
    case 1: dayName = "Hétfő";
    case 2: dayName = "Kedd";
    case 3: dayName = "Szerda";
    case 4: dayName = "Csütörtök";
    case 5: dayName = "Péntek";
    case 6: dayName = "Szombat";
}

//ha megtalálja az első esetet, utána mindet végrehajtja onnantól kezdve, hogy teljesül a feltétel, ezért kell bele break

switch(weekDay){
    case 0: dayName = "Vasárnap";
    break;
    case 1: dayName = "Hétfő";
    break;
    case 2: dayName = "Kedd";
    break;
    case 3: dayName = "Szerda";
    break;
    case 4: dayName = "Csütörtök";
    break;
    case 5: dayName = "Péntek";
    break;
    case 6: dayName = "Szombat";
}

//érdemes még egy default esetet is belevenni:

switch(weekDay){
    case 0: dayName = "Vasárnap";
    break;
    case 1: dayName = "Hétfő";
    break;
    case 2: dayName = "Kedd";
    break;
    case 3: dayName = "Szerda";
    break;
    case 4: dayName = "Csütörtök";
    break;
    case 5: dayName = "Péntek";
    break;
    case 6: dayName = "Szombat";
    break;
    default: dayName = "ismeretlen";
}



/////////////////////////////////////////////////////////////////////////////////


//while loop

let i = 0;
while(i<10){
    i++;
    console.log(i); //1-10-ig kiirja a számokat
}

let animal = {name:"Cat", age:3};
let keys = Object.keys(animal);
i = 0;
while(i<keys.length){
    console.log(animal[keys[i]]);
    i++;
}

//do while - 1x biztos lefut

let k = 10;
do{
    console.log(k);
    k++;
}
while(k<0);
//mivel k nem kisebb mint 10, 1x sem szabadna lefutni, de a do while ciklus mitt 1x mégis lefut - hátul tesztelő ciklus

