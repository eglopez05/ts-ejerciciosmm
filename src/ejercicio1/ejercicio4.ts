// 1. CLASE BASE: ANIMAL
class Animal {
    private _nombre: string;

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    
    public sonar(): void {
        console.log(`${this._nombre} hace un sonido genérico.`);
    }

    public get nombre(): string {
        return this._nombre;
    }
}


class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    public sonar(): void {
        
        console.log(`${this.nombre} dice: ¡Guau! ¡Guau!`);
    }
}


class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre); 
    }

    public sonar(): void {
    
        console.log(` ${this.nombre} dice: ¡Miau! ¡Miau!`);
    }
}


const max = new Perro("Max");
const luna = new Gato("Luna");
const animalDesconocido = new Animal("Bicho");

const misMascotas: Animal[] = [max, luna, animalDesconocido];

console.log("Demostración de Polimorfismo");

misMascotas.forEach((animal: Animal) => {

    animal.sonar(); 
});