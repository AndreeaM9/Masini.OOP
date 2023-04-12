// Creați o clasă Mașină ce va conține anumite informații: model, culoare, an fabricație și viteză.
// Creați două metode: accelerează (va crește viteza cu 10 km/h) și frânează (va scădea viteza cu 10 km/h).
// Creați o metodă ce descrie mașina: Ford Focus roșu, fabricat în 2018, merge cu 120 km/h.
// Creați două obiecte mașini și experimentați cu aceste metode.
// Creați un UI cu un formular pentru o mașină. Vom avea un buton pentru accelerare, unul pentru frânare, iar descrierea mașinii va fi afișată după prima accelerare sau frânare.

class Car {
    constructor(model, culoare, anFabricatie, viteza){
        this.model = model;
        this.culoare = culoare;
        this.anFabricatie = anFabricatie;
        this.viteza = viteza;
    }
    accelereaza(){
        if (this.viteza < 250){
            this.viteza += 10;
        }
    }
    franeaza(){
        if (this.viteza >= 10) {
            this.viteza -= 10;
        }
    }
    descrie(){
        return `${this.model} ${this.culoare}, fabricat in ${this.anFabricatie}, viteza initiala: ${this.viteza} km/h.`;
    }
}


let model = document.querySelector('.model'),
    culoare = document.querySelector('.culoare'),
    anFabricatie = document.querySelector('.anFabricatie'),
    viteza = document.querySelector('.viteza'),
    btnAccelereaza = document.querySelector('.accelereaza'),
    btnFraneaza = document.querySelector('.franeaza');

let buttonPushed = 0;
const car1 = new Car();

 btnAccelereaza.addEventListener('click', () => {

    if (buttonPushed === 1){
        if (car1.model !== model.value && model.value !== ""){
            
            if (model.value === "" || culoare.value === "" || anFabricatie.value === "" || viteza.value === ""){
                alert("Lipsesc date");
                return;
            }

            car1.model = model.value;
            car1.culoare = culoare.value;
            car1.anFabricatie = anFabricatie.value;
            car1.viteza = Number(viteza.value);
                    
            document.querySelector('#rezultat-descriere').textContent = car1.descrie();
    
            model.value = "";
            culoare.value = "";
            anFabricatie.value = "";
            viteza.value = "";             
        }
    }

    if (buttonPushed === 0){
        
        if (model.value === "" || culoare.value === "" || anFabricatie.value === "" || viteza.value === ""){
            alert("Lipsesc date");
            return;
        }

        buttonPushed = 1;
        car1.model = model.value;
        car1.culoare = culoare.value;
        car1.anFabricatie = anFabricatie.value;
        car1.viteza = Number(viteza.value); 
        
        document.querySelector('#rezultat-descriere').textContent = car1.descrie();

        model.value = "";
        culoare.value = "";
        anFabricatie.value = "";
        viteza.value = "";         
    }
    car1.accelereaza();
    document.querySelector('#rezultat-viteza').textContent = "Merge cu viteza " + car1.viteza + " km/h";

    document.querySelector('.rezultat').style.visibility = 'visible';
}) 

btnFraneaza.addEventListener('click', () => {

    if (buttonPushed === 1){
        if (car1.model !== model.value && model.value !== ""){

            if (model.value === "" || culoare.value === "" || anFabricatie.value === "" || viteza.value === ""){
                alert("Lipsesc date");
                return;
            }            
            
            car1.model = model.value;
            car1.culoare = culoare.value;
            car1.anFabricatie = anFabricatie.value;
            car1.viteza = Number(viteza.value);
                    
            document.querySelector('#rezultat-descriere').textContent = car1.descrie();
    
            model.value = "";
            culoare.value = "";
            anFabricatie.value = "";
            viteza.value = "";             
        }
    }    

    if (buttonPushed === 0){

        if (model.value === "" || culoare.value === "" || anFabricatie.value === "" || viteza.value === ""){
            alert("Lipsesc date");
            return;
        }        

        buttonPushed = 1;
        car1.model = model.value;
        car1.culoare = culoare.value;
        car1.anFabricatie = anFabricatie.value;
        car1.viteza = Number(viteza.value);
                
        document.querySelector('#rezultat-descriere').textContent = car1.descrie();

        model.value = "";
        culoare.value = "";
        anFabricatie.value = "";
        viteza.value = "";        
    } 
    car1.franeaza();
    document.querySelector('#rezultat-viteza').textContent = "Merge cu viteza " + car1.viteza + " km/h";

    document.querySelector('.rezultat').style.visibility = 'visible';
}) 

// const car1 = new Car("Toyota", "rosu", 2008, 90)
// const car2 = new Car("Ford Focus", "rosu", 2018, 120)
// car1.accelereaza();
// car1.descrie();

