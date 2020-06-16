function calcAmount(){
   let price = 1000;
   let amountInput = document.querySelector("input[name='db']");
   let amountNumber = parseInt(amountInput.value);
   amountInput = isNaN(amountNumber) ? 0 : amountNumber;

   showSumPrice(price,amountNumber); //itt paramétereket adtunk
}

function showSumPrice(price, amountNumber){ //itt argumentumnak hívjuk a paramétereket
   //ha a függvény nem kapja meg a 2. paramétert, kell egy biztonsági beállítás:
   amountNumber = amountNumber || 0; //booleanként viselkedik: ha van, akkor önmaga lesz, egyébként 0
   let showAmount = document.querySelector("span.summa");
   if(amountNumber > 10 ){
       alert("Maximum 10 terméket vásárolhat!");
       return; //return utáni rész nem hajtódik végre
   } else if(amountNumber < 1){
       alert("Minimum 1 terméket kell választani!");
   } else {
       let amount = amountNumber * price;
       //let amount = parseInt(amountInput.value) * price;
       showAmount.innerHTML = amount;
   }
}

function displayName(){
    let nev = document.querySelector("input[name='nev']");
    let neve = document.querySelector("span.neve");
    let nevErtek = nev.value.toString();
    if(nevErtek.length>0){
        if(typeof nevErtek === 'string'){
            neve.innerHTML = nevErtek;
        } 
   
    } else {
        alert("Adjon meg egy nevet!");
    }
}

function showStats(){
    let nev = document.querySelector("input[name='nev']");
    let nevErtek = nev.value.toString();
    let szam = document.querySelector("input[name='szam']");
    let szamErtek = parseInt(szam.value);
    let tomb = [nevErtek, szamErtek]; 
    let showStats = document.querySelector("span.stats");
    if(nevErtek.length>=3 && szamErtek>0){
       // showStats.innerHTML = nevErtek + ": " + szamErtek;
       showStats.innerHTML = tomb[0] + ": " + tomb[1];
    } else {
        alert("Hibás név és/vagy érték!");
    }
}