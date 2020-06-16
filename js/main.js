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