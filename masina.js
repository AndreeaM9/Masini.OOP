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
        this.viteza += 10;
    }
    franeaza(){
        this.viteza -= 10;
    }
    descrie(){
        console.log(`${this.model} ${this.culoare}, fabricat in ${this.anFabricatie}, merge cu ${this.viteza} km/h.`);
    }
}

const car1 = new Car("Toyota", "rosu", 2008, 90)
const car2 = new Car("Ford Focus", "rosu", 2018, 120)
car1.accelereaza();
car1.descrie();