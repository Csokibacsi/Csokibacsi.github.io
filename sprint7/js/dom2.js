//Vannak html elemek, amik nincsenek lezárva, self-closing, nekik nincsenek gyerekeik, a többinek viszont van child-ja - pl. egy div-en belül van még egy div, az a child-ja

//az input-nak nincs lezáró tagje, nem lehet child-ot belerakni

document.querySelector("input#topInput").childElementCount; // 0
//persze, mert self-closed elem, nincs gyereke
document.querySelector("div").childElementCount; // 2
//neki már van 2 gyereke

document.querySelector("div.form-group:nth-child(2)");
//a form-group class 2.dik gyerekét dobja ki
// 3db gyerek is van

document.querySelector("div.form-group:nth-child(2)").childNodes; //még több kisebb elem van benne - az összes sima szöveges node-ot is visszaadja

document.querySelector("div.form-group:nth-child(2)").firstChild; //első node-ot adja ki

document.querySelector("div.form-group:nth-child(2)").firstElementChild; //már a szöveges node-ot nem adja vissza, ez már az input-ot adja ki



///////////////////////////////////////////////////////

//új elemek létrehozása child elemként:
let helpText = document.createElement("small"); //<small> tag létrehozása
helpText.className = "form-text text-muted"; //class-a
helpText.innerHTML = "Adja meg a feltéteket:"; 
console.log(helpText);

//hozzáadjuk a létrejött elemet a meglévőkhöz:
let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText); 

//ha meggondolom magam:
parent.removeChild(helpText); //eltávolítom az elemet




///////////////////////////////////////////////////////

///ESEMÉNYKEZELÉS

let sendButton = document.querySelector("form .btn.btn-primary");

/*
sendButton.onclick = function(){
    alert("Hello JS!"); 
} //a submit button végrehajtás helyett egy alertet dob
//nem a html-ben adom meg, hanem az adott elem eseménykezelőjében adom meg a függvényt
*/

//2. megadási mód:

/*
sendButton.onclick = calcAmount(); //az eredeti függvényt, amit a html-ben hívtam meg, itt is meghívhatom a sendbutton eseményeként
*/

//3. mód:

sendButton.addEventListener("click", function(){
    alert("Hello JS!");
});
//így felugrik az alert ablak, viszont az eredeti calcAmount() függvény is lefut, amit a html-ben hívtunk meg, szóval több funkció is le tud futni egyetlen eseményre!
//addEventlistener-rel több eseményt is hozzáadhatunk egyazon metódushoz - újat adunk hozzá

window.addEventListener("resize", function(){
    console.log(this.innerHeight, this.innerWidth); 
});
//a this a window-ra vonatkozik

//esemény előtagja on, ha mögé rakjuk, viszont addEventListenernél az esemény nevét kell csak megadni, tehát nem onclick hanem csak click

///////////////////////////////////////////////////

///egéresemények:

/*let orderForm = document.querySelector("#orderForm");
//az orderForm űrlapra mutat a változóm
orderForm.addEventListener("submit", function(ev){
    ev.preventDefault();
    //console.log(this); //kiteszem az objktumot a konzolra

    let inputs = this.querySelectorAll("input");
    let values = {};
    for(let i=0; i<inputs.length; i++){
        values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
});
//a function-ben az ev - paraméternek az eseményt adjuk, amit megkap a függvény
//a preventDefault()-tal megakadályozzuk, hogy az esemény után frissüljön az oldal, ne szakadjon meg a javascript folyamat
*/



///////////////////////////////////////////////////////////////////////////////////////////

//PARENT
/*
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
for(let i = 0; i<alertCloseButtons.length; i++){
    alertCloseButtons[i].addEventListener("click", function(ev){
        //console.log(ev);
        this.parentElement.style.display = "none"; //elrejtem a parent elemet
        //style attribútumban a display-t none-ra állítom

    });//az alertCloseButtons[ egy tömb, ezért az i indexű elemére kell mutatni
}*/

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function(ev){
    this.parentElement.style.display = "none";
};
for(let i = 0; i<alertCloseButtons.length; i++){
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction); 
} //nem kell zárójl a funkció után

