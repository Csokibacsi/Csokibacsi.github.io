/*function calcAmount(){
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    //if(isNaN(amountNumber)){ //ez akkor kell, ha nincs megadva érték, és úgy submitel
    //    amountNumber = 0; // Nan-t átalakítja 0 értékre
    //}

    //ezt professzionálisabban:
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber; //ha isNan akkor = 0, egyébként meg önmagával egyenlő
    //ha igaz, a ? utáni értéket adja vissza, ha nem, a : utánit


    if(amountNumber > 10 ){
        alert("Maximum 10 terméket vásárolhat!");
        return; //return utáni rész nem hajtódik végre
    } else if(amountNumber < 1){
        alert("Minimum 1 terméket kell választani!");
    } else {

        let amount = amountNumber * price;
    //let amount = parseInt(amountInput.value) * price;
    //alert("Fizetendő: " + amount + "Ft");
    //eseménykezelés -> a html fájlban a button onclick="calcAmount()" attribútumával fogom behívni a függvényt

    showAmount.innerHTML = amount; //html manipulálás - showamount span-ben
    }
}*/

// a CLEAN CODE jegyében a fenti függvényt szétszedjük: 

function calcAmount(){
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountInput = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price,amountNumber); //itt paramétereket adtunk
}

function showSumPrice(price, amountNumber){ //itt argumentumnak hívjuk a paramétereket
    //ha a függvény nem kapja meg a 2. paramétert, kell egy biztonsági beállítás:
    amountNumber = amountNumber || 0; //booleanként viselkedik: ha van, akkor önmaga lesz, egyébként 0
    let showAmount = document.querySelector("span.show-amount");
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