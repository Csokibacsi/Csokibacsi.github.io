//konzolon:
document; //#document - teljes oldalt jelenti

//elemek kiválasztáa az id alapján:

document.getElementById("topInput"); //<input id="topInput" type="text" name="top-input" class="form-control">

document.getElementsByName("amount-input"); //name attribútum alapján is ki lehet választani - s-re figyelni!!! (elementS)
//de itt az output egy tömb:
// NodeList [ input.form-control ]

//ki tudom választani az első elemét, mondjuk 0 indexxel:
document.getElementsByName("amount-input")[0];
//<input class="form-control" type="number" name="amount-input" value="1">
//ez már rendesen visszaadta az elemet

//class name:
document.getElementsByClassName("form-control");
//ez is tömböt ad vissza, az összes elem, ami  form-control osztályba tartozik

document.getElementsByTagName("h3"); //összes h3-as elemet kidobja
//régen csak ez volt a queryselector helyett

document.querySelector(".form-control"); //ez csak 1 elemet ad vissza, ezért a legelső találatot dobja csak ki

document.querySelectorAll(".form-control"); //most már az összes .form-control elemet feldobja

//Modern webfejlesztésben csak a querySelector-t és a querySelectorAll-t használjuk, a többit már jellemzően nem




/////////////////////////////////////////////////////////////////


document.querySelector("input#topInput"); //<input id="topInput" class="form-control" type="text" name="top-input">

//elmentem egy változóba:
let topInput = document.querySelector("input#topInput"); 

topInput; //konzolon megmutatja az elemet
typeof topInput; //"object"

//Most létrehozok egy új metódust illetve képességet, amely minden elemre beállítható:
Element.prototype.setUrgent = function(){
    this.style.border = "solid 2px red";
} //ettől kezdve minden elemre beállíthatok egy setUrgent-et, és vörös szegélyt ad az elemnek, ha aktív

document.querySelector("input#topInput").setUrgent();
//piros szegélyt rajzol az input köré

///////////////////////////////////////////////////////////////

topInput.getAttribute("class"); //"form-control"
topInput.getAttribute("id"); //"topInput"
topInput.getAttribute("name"); //"top-input"
topInput.getAttribute("type"); //text
topInput.getAttribute(); //hiba, min. 1 paramétert meg kell adni
//ha az összeset lekérném:
topInput.attributes;


//ha nem lekérni, hanem módosítani szeretném az attribútumot:
topInput.setAttribute("type", "email"); //min. 2 paraméter kell: attribútum és érték 
topInput.setAttribute("type", "password"); //stb.



////////////////////////////////////////////////////////////////

//ha egyszerre többnek akarom beállítani, akkor tömböt kell iterálni:

let myNodeList = document.querySelectorAll("input"); //kiválasztom az összes input-ot az oldalon
for(let i=0; i<myNodeList.length; i++){
    myNodeList[i].style.backgroundColor = "red";
} //kiszieztem az összes input mezőt pirosra

//for in ciklussal:
for(let element in myNodeList){
    element.style.color = "grey";
}//HIBA 
//a baj az, hogy a mynodelist -ben rengeteg elem van, és nem elemenként megy végig 0, 1,2 stb. és nem minden elemnek van style tulajdonsága - pontosítani kell:

for(let element in myNodeList){
    if(element.style){ //ellenőrizzük, hogy az elem style tulajdonsága true-e
        element.style.color = "grey";
    }

}


/////////////////////////////////////////////////

function massModify(selector, attribute, value){
    let nodeList = document.querySelectorAll(selector); //összes selectort egy nodeList nevű tömbbe rakunk, azt kell bejárni
    for(let i = 0; i<nodeList.length; i++){
        nodeList[i][attribute] = value;
    }
}

massModify("input", "placeholder", "value"); //a value z input függvényében változik
